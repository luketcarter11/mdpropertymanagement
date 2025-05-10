import { CronJob } from 'cron';
import { fetchBarkReviews } from './scrapeBarkReviews';

// Run every day at midnight
const job = new CronJob('0 0 * * *', () => {
  fetchBarkReviews();
  console.log('Scheduled job: Updated Bark reviews');
});

job.start();

export default job; 