import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import type { NextApiRequest, NextApiResponse } from 'next';

const oAuth2Client = new OAuth2Client(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.REDIRECT_URI
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Log environment variables (excluding sensitive data)
    console.log('Environment check:', {
      hasClientId: !!process.env.GMAIL_CLIENT_ID,
      hasClientSecret: !!process.env.GMAIL_CLIENT_SECRET,
      hasRedirectUri: !!process.env.REDIRECT_URI,
      hasRefreshToken: !!process.env.GMAIL_REFRESH_TOKEN,
      hasAccessToken: !!process.env.GMAIL_ACCESS_TOKEN,
    });

    // Set credentials
    oAuth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN,
      access_token: process.env.GMAIL_ACCESS_TOKEN,
    });

    // Get Gmail service
    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

    // Test Gmail API connection
    const profile = await gmail.users.getProfile({
      userId: 'me'
    });

    res.status(200).json({
      success: true,
      message: 'Gmail API connection successful',
      email: profile.data.emailAddress
    });
  } catch (error) {
    console.error('Gmail API test error:', error);
    res.status(500).json({
      success: false,
      message: 'Gmail API connection failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 