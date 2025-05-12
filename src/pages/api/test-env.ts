import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get all environment variables
  const env = process.env;
  
  // Create a safe version of the environment to display
  const safeEnv = {
    // Show if variables exist and their length
    GMAIL_CLIENT_ID: env.GMAIL_CLIENT_ID ? `Present (${env.GMAIL_CLIENT_ID.length} chars)` : 'Missing',
    GMAIL_CLIENT_SECRET: env.GMAIL_CLIENT_SECRET ? `Present (${env.GMAIL_CLIENT_SECRET.length} chars)` : 'Missing',
    REDIRECT_URI: env.REDIRECT_URI,
    NODE_ENV: env.NODE_ENV,
    // Show all env variable names (but not values)
    ALL_ENV_NAMES: Object.keys(env).sort(),
    // Show current working directory
    CWD: process.cwd(),
    // Show if .env files are being loaded
    ENV_FILES: {
      DOT_ENV: require('fs').existsSync('.env'),
      DOT_ENV_LOCAL: require('fs').existsSync('.env.local'),
      DOT_ENV_DEVELOPMENT: require('fs').existsSync('.env.development'),
      DOT_ENV_DEVELOPMENT_LOCAL: require('fs').existsSync('.env.development.local'),
    }
  };

  res.status(200).json(safeEnv);
} 