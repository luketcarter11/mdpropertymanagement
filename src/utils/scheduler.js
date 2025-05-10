const cron = require('cron');
const { fetchBarkReviews } = require('./scrapeBarkReviews');

// Run every day at midnight
const job = new cron.CronJob('0 0 * * *', () => {
  fetchBarkReviews();
  console.log('Scheduled job: Updated Bark reviews');
});

job.start();
