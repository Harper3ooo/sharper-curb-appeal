// api/printful-products.js

export default async function handler(req, res) {
  const PRINTFUL_API_KEY = process.env.PRINTFUL_API_KEY; // ✅ Secure, not hardcoded

  if (!PRINTFUL_API_KEY) {
    return res.status(500).json({ error: 'API key is missing from environment.' });
  }

  try {
    const response = await fetch('https://api.printful.com/store/products', {
      headers: {
        Authorization: `Bearer ${PRINTFUL_API_KEY}`,
      },
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Fetch failed:', error);
    res.status(500).json({ error: 'Failed to fetch from Printful' });
  }
}