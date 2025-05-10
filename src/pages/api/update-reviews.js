import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const reviews = req.body.reviews;
    const filePath = path.join(process.cwd(), 'public', 'reviews.json');
    fs.writeFileSync(filePath, JSON.stringify(reviews, null, 2));
    res.status(200).json({ message: 'Reviews updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating reviews' });
  }
}
