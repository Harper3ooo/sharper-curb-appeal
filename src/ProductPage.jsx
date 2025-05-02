import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/printful-product-detail?id=${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.result))
      .catch((err) => console.error('Error fetching product detail:', err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found.</p>;

  const mainVariant = product.variants?.[0];
  const price = mainVariant?.retail_price || 'N/A';
  const image = mainVariant?.files?.[0]?.preview_url;

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      {image && <img src={image} alt={product.name} className="product-image" />}
      <p className="price">Price: ${price}</p>
      <p>{product.description || 'No description available.'}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}