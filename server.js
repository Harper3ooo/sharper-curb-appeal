// server.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5000;
const PRINTFUL_API_KEY = 'D60crme6Wf5aaWoscHPAnFkL7ZdUakhNuYcZCh4mRrp7Jl7kGg0o5faABW17mYuM';

app.get('/api/printful-products', async (req, res) => {
  try {
    const response = await fetch('https://api.printful.com/store/products', {
      headers: {
        Authorization: `Bearer ${PRINTFUL_API_KEY}`
      }
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch from Printful' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));