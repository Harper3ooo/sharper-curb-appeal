export default async function handler(req, res) {
    const token = process.env.PRINTFUL_TOKEN;
  
    const response = await fetch('https://api.printful.com/store/products', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  
    const data = await response.json();
    res.status(200).json(data);
  }  