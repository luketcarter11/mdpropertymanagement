import { OAuth2Client } from 'google-auth-library';
import type { NextApiRequest, NextApiResponse } from 'next';

const oAuth2Client = new OAuth2Client(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.REDIRECT_URI
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { code } = req.query;

  if (!code || typeof code !== 'string') {
    return res.status(400).json({ message: 'No code provided' });
  }

  try {
    const { tokens } = await oAuth2Client.getToken(code);
    console.log('Tokens received:', {
      hasAccessToken: !!tokens.access_token,
      hasRefreshToken: !!tokens.refresh_token,
      expiryDate: tokens.expiry_date
    });

    // Display tokens and instructions
    res.setHeader('Content-Type', 'text/html');
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Gmail API Authentication Success</title>
          <style>
            body { font-family: Arial, sans-serif; max-width: 800px; margin: 2rem auto; padding: 0 1rem; }
            pre { background: #f5f5f5; padding: 1rem; overflow-x: auto; }
            .warning { color: #721c24; background-color: #f8d7da; padding: 1rem; border-radius: 4px; margin: 1rem 0; }
          </style>
        </head>
        <body>
          <h1>Authentication Successful! 🎉</h1>
          
          <div class="warning">
            <strong>Important:</strong> Copy these tokens immediately! The access token and refresh token will only be shown once.
          </div>

          <h2>1. Add these tokens to your .env.local file:</h2>
          <pre>
GMAIL_ACCESS_TOKEN=${tokens.access_token}
GMAIL_REFRESH_TOKEN=${tokens.refresh_token}</pre>

          <h2>2. Add the same tokens to your production environment variables.</h2>
          
          <h2>3. Restart your Next.js server after adding the tokens.</h2>
          
          <p>Your Gmail API integration should now be ready to use!</p>
          
          <script>
            // Select pre content on click for easy copying
            document.querySelector('pre').addEventListener('click', function() {
              const range = document.createRange();
              range.selectNode(this);
              window.getSelection().removeAllRanges();
              window.getSelection().addRange(range);
            });
          </script>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Error getting tokens:', error);
    res.status(500).json({ 
      message: 'Failed to get tokens',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}