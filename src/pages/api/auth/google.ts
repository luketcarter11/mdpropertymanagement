import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Get the host from the request
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const host = req.headers.host || 'localhost:3000';
  const redirectUri = `${protocol}://${host}/api/auth/callback/google`;

  // Debug environment variables (safely)
  const envDebug = {
    GMAIL_CLIENT_ID: process.env.GMAIL_CLIENT_ID ? '✓ Present' : '✗ Missing',
    GMAIL_CLIENT_SECRET: process.env.GMAIL_CLIENT_SECRET ? '✓ Present' : '✗ Missing',
    REDIRECT_URI: redirectUri,
    NODE_ENV: process.env.NODE_ENV
  };

  console.log('Environment Debug:', envDebug);

  // Check for missing environment variables
  if (!process.env.GMAIL_CLIENT_ID || !process.env.GMAIL_CLIENT_SECRET) {
    const missingVars = [];
    if (!process.env.GMAIL_CLIENT_ID) missingVars.push('GMAIL_CLIENT_ID');
    if (!process.env.GMAIL_CLIENT_SECRET) missingVars.push('GMAIL_CLIENT_SECRET');

    return res.status(500).json({
      error: 'Configuration Error',
      message: 'Missing required environment variables',
      missingVariables: missingVars,
      debug: envDebug
    });
  }

  try {
    const oAuth2Client = new OAuth2Client(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET,
      redirectUri
    );

    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: [
        'https://www.googleapis.com/auth/gmail.send',
        'https://www.googleapis.com/auth/gmail.compose',
        'https://www.googleapis.com/auth/gmail.modify'
      ],
      prompt: 'consent'
    });

    console.log('Generated Auth URL:', authUrl);
    res.redirect(authUrl);
  } catch (error) {
    console.error('Error generating auth URL:', error);
    res.status(500).json({ 
      error: 'Failed to generate auth URL',
      details: error instanceof Error ? error.message : 'Unknown error',
      debug: envDebug
    });
  }
} 