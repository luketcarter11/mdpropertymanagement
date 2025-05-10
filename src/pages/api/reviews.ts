import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface BarkReview {
  author: string;
  rating: number;
  content: string;
  date: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BarkReview[] | { message: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const reviewsPath = path.join(process.cwd(), 'public', 'reviews.json');
    
    // Check if file exists
    if (!fs.existsSync(reviewsPath)) {
      console.log('Reviews file not found, creating empty reviews file');
      fs.writeFileSync(reviewsPath, '[]', 'utf-8');
      return res.status(200).json([]);
    }

    // Read and parse the file
    const fileContent = fs.readFileSync(reviewsPath, 'utf-8');
    
    try {
      const reviews: BarkReview[] = JSON.parse(fileContent);
      res.status(200).json(reviews);
    } catch (parseError) {
      console.error('Error parsing reviews JSON:', parseError);
      // If JSON is invalid, return empty array and create new file
      fs.writeFileSync(reviewsPath, '[]', 'utf-8');
      res.status(200).json([]);
    }
  } catch (error) {
    console.error('Error reading reviews file:', error);
    res.status(500).json({ message: 'Error fetching reviews' });
  }
} 