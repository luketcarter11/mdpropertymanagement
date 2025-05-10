import { CronJob } from 'cron';
import axios from 'axios';

async function updateBarkReviews() {
  try {
    console.log('Starting scheduled Bark reviews update...');
    
    // Get the base URL from environment or default to localhost
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    
    // Trigger the scraping
    const response = await axios.get(`${baseUrl}/api/scrape-reviews`);
    
    if (response.data.success) {
      console.log(`Successfully updated ${response.data.reviews.length} Bark reviews`);
    } else {
      console.error('Failed to update Bark reviews:', response.data.message);
    }
  } catch (error) {
    console.error('Error in scheduled Bark reviews update:', error);
  }
}

// Run every day at midnight
const job = new CronJob('0 0 * * *', updateBarkReviews, null, false, 'UTC');

// Start the job
job.start();

export default job; 