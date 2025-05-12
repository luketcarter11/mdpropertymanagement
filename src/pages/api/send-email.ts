import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';
import type { NextApiRequest, NextApiResponse } from 'next';

// Initialize OAuth2 client
const oAuth2Client = new OAuth2Client(
  process.env.GMAIL_CLIENT_ID,
  process.env.GMAIL_CLIENT_SECRET,
  process.env.REDIRECT_URI
);

function createMessage(to: string, subject: string, message: string) {
  const email = [
    'Content-Type: text/plain; charset="UTF-8"\r\n',
    'MIME-Version: 1.0\r\n',
    `To: ${to}\r\n`,
    `Subject: ${subject}\r\n`,
    '\r\n',
    message
  ].join('');

  return Buffer.from(email).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function sendEmail(auth: OAuth2Client, to: string, subject: string, message: string) {
  const gmail = google.gmail({ version: 'v1', auth });
  const raw = createMessage(to, subject, message);

  try {
    const result = await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: raw
      }
    });
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Log environment variables (excluding sensitive data)
    console.log('Environment check:', {
      hasClientId: !!process.env.GMAIL_CLIENT_ID,
      hasClientSecret: !!process.env.GMAIL_CLIENT_SECRET,
      hasRedirectUri: !!process.env.REDIRECT_URI,
      hasRefreshToken: !!process.env.GMAIL_REFRESH_TOKEN,
      hasAccessToken: !!process.env.GMAIL_ACCESS_TOKEN,
    });

    const {
      formType,
      name,
      email,
      phone,
      service,
      message,
      propertyType,
      propertyAddress,
      propertyLink,
      preferredDate,
      requirements
    } = req.body;

    // Set credentials
    oAuth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN,
      access_token: process.env.GMAIL_ACCESS_TOKEN,
    });

    // Create admin message content based on form type
    let adminMessageContent = '';
    if (formType === 'general') {
      adminMessageContent = `
New General Message from ${name}

Contact Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Service: ${service}

Message:
${message}
      `;
    } else {
      adminMessageContent = `
New Quote Request from ${name}

Contact Details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Service: ${service}

Property Details:
- Type: ${propertyType}
- Address: ${propertyAddress || 'Not provided'}
- Property Link: ${propertyLink || 'Not provided'}
- Preferred Start Date: ${preferredDate || 'Not provided'}

Requirements:
${requirements}
      `;
    }

    // Create customer confirmation message
    const customerMessageContent = `
Dear ${name},

Thank you for contacting MD Property Management. We have received your ${formType === 'general' ? 'message' : 'quote request'} and will get back to you shortly.

${formType === 'quote' ? `
We will review your requirements for:
- Service: ${service}
- Property Type: ${propertyType}
- Preferred Start Date: ${preferredDate || 'Not specified'}

One of our team members will contact you with a detailed quote.` : ''}

If you need immediate assistance, please don't hesitate to call us at 07940 125 381.

Best regards,
MD Property Management Team
    `;

    // Send email to admin
    await sendEmail(
      oAuth2Client,
      'mondeisec@gmail.com',
      `New ${formType === 'general' ? 'Message' : 'Quote Request'} from ${name}`,
      adminMessageContent
    );

    // Send confirmation email to customer
    await sendEmail(
      oAuth2Client,
      email,
      'Thank you for contacting MD Property Management',
      customerMessageContent
    );

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error in send-email API:', error);
    res.status(500).json({ 
      error: 'Failed to send emails',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
} 