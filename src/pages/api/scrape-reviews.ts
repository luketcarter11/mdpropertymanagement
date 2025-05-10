import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import cheerio from 'cheerio';

interface BarkReview {
  author: string;
  rating: number;
  content: string;
  date: string;
}

interface ApiResponse {
  success: boolean;
  reviews?: BarkReview[];
  message?: string;
}

const BARK_URL = 'https://www.bark.com/en/gb/company/md-property-management/ZKP96/?show_reviews=true';

async function fetchBarkReviews(): Promise<BarkReview[]> {
  try {
    const { data } = await axios.get(BARK_URL);
    const $ = cheerio.load(data);
    const reviews: BarkReview[] = [];

    $('.review-item').each((index, element) => {
      const author = $(element).find('.reviewer-name').text().trim();
      const rating = $(element).find('.star-rating .active').length;
      const content = $(element).find('.review-text').text().trim();
      const date = $(element).find('.review-date').text().trim();

      if (author && rating && content) {
        reviews.push({ author, rating, content, date });
      }
    });

    return reviews;
  } catch (error) {
    console.error('Error fetching Bark reviews:', error);
    throw error;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const reviews = await fetchBarkReviews();

    if (!reviews.length) {
      return res.status(200).json({ 
        success: true, 
        reviews: [],
        message: 'No reviews found' 
      });
    }

    // Update the reviews in the database
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/update-reviews`, { reviews });
    } catch (updateError) {
      console.error('Error updating reviews:', updateError);
      // Continue with the response even if update fails
    }

    res.status(200).json({ success: true, reviews });
  } catch (error) {
    console.error('Error in scrape-reviews handler:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error scraping reviews' 
    });
  }
} 