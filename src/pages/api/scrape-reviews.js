import axios from 'axios';
import cheerio from 'cheerio';

const BARK_URL = 'https://www.bark.com/en/gb/company/md-property-management/ZKP96/?show_reviews=true';

async function fetchBarkReviews() {
  try {
    const { data } = await axios.get(BARK_URL);
    const $ = cheerio.load(data);
    const reviews = [];

    $('.review-item').each((index, element) => {
      const author = $(element).find('.reviewer-name').text().trim();
      const rating = $(element).find('.star-rating .active').length;
      const content = $(element).find('.review-text').text().trim();
      const date = $(element).find('.review-date').text().trim();

      reviews.push({ author, rating, content, date });
    });

    return reviews;
  } catch (error) {
    console.error('Error fetching Bark reviews:', error);
    return [];
  }
}

export default async function handler(req, res) {
  try {
    const reviews = await fetchBarkReviews();
    res.status(200).json({ success: true, reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error scraping reviews' });
  }
}
