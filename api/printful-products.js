export default async function handler(req, res) {
  const PRINTFUL_API_KEY = process.env.PRINTFUL_API_KEY;

  if (!PRINTFUL_API_KEY) {
    return res.status(500).json({ error: 'API token is missing from environment.' });
  }

  try {
    const response = await fetch('https://api.printful.com/store/products', {
      headers: {
        Authorization: `Bearer ${PRINTFUL_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    // Log for debugging (you can remove these after confirming it's working)
    console.log('Printful API response status:', response.status);
    console.log('Printful API response data:', data);

    res.status(response.status).json(data);
  } catch (error) {
    console.error('Fetch failed:', error);
    res.status(500).json({ error: 'Failed to fetch from Printful API' });
  }
}