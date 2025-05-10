const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

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

    // Save the reviews to a JSON file
    fs.writeFileSync('./public/reviews.json', JSON.stringify(reviews, null, 2));
    console.log('Bark reviews scraped and saved successfully.');
  } catch (error) {
    console.error('Error fetching Bark reviews:', error);
  }
}

// Run the scraper
fetchBarkReviews();