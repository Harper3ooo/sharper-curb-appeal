import { Link } from 'react-router-dom';
import './ArrowDriveShop.css';
import { useState, useEffect } from 'react';

export default function ArrowDriveShop() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/printful-products')
      .then((res) => res.json())
      .then((data) => {
        if (data.result) setProducts(data.result);
      })
      .catch((err) => console.error('Error fetching products:', err))
      .finally(() => setLoading(false));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="arrowdrive-shop-page">
      <header className="header">
        <img src="/images/arrow-drive-logo.png" alt="Arrow Drive Logo" className="logo" />
      </header>

      <nav className="shop-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/arrow-drive" className="nav-link">Shop All</Link>
        <div className="cart-icon">🛒 ({cart.length})</div>
      </nav>

      <section className="product-grid">
        {loading ? (
          <p className="loading">Loading products...</p>
        ) : products.length > 0 ? (
          products.map((product) => {
            const price = product?.synced?.[0]?.retail_price;

            return (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.thumbnail_url} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  {price && <p className="price">${price}</p>}
                </div>
                <button onClick={() => addToCart(product)} className="add-to-cart">+ Add to Cart</button>
              </div>
            );
          })
        ) : (
          <p className="no-products">No products found.</p>
        )}
      </section>

      <footer className="footer">
        <img src="/images/arrow-drive-logo.png" alt="Arrow Drive Logo" className="footer-logo" />
        <div className="footer-links">
          <a href="#" className="footer-link">Facebook</a>
          <a href="#" className="footer-link">Instagram</a>
        </div>
        <div className="footer-contact">
          arrowdriveshop@gmail.com | (601) 123-4567
        </div>
        <div className="footer-nav">
          <a href="/faq" className="footer-link">FAQ</a>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} Arrow Drive. All rights reserved.
        </div>
      </footer>
    </div>
  );
}