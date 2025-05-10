import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

interface BarkReview {
  author: string;
  rating: number;
  content: string;
  date: string;
}

const BARK_URL = 'https://www.bark.com/en/gb/company/md-property-management/ZKP96/?show_reviews=true';

export async function fetchBarkReviews(): Promise<void> {
  try {
    const { data } = await axios.get(BARK_URL);
    const $ = cheerio.load(data);

    const reviews: BarkReview[] = [];

    $('.review-item').each((index, element) => {
      const author = $(element).find('.reviewer-name').text().trim();
      const rating = $(element).find('.star-rating .active').length;
      const content = $(element).find('.review-text').text().trim();
      const date = $(element).find('.review-date').text().trim();

      reviews.push({ author, rating, content, date });
    });

    // Save the reviews to a JSON file
    const reviewsPath = path.join(process.cwd(), 'public', 'reviews.json');
    fs.writeFileSync(reviewsPath, JSON.stringify(reviews, null, 2));
    console.log('Bark reviews scraped and saved successfully.');
  } catch (error) {
    console.error('Error fetching Bark reviews:', error);
    throw error;
  }
} 