import { Link } from 'react-router-dom';
import './ArrowDriveShop.css';
import { useState, useEffect } from 'react';

export default function ArrowDriveShop() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/printful-products')
      .then((res) => res.json())
      .then((data) => {
        if (data.result) setProducts(data.result);
      });
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="arrowdrive-shop-page">
      {/* Logo at Top */}
      <header className="header">
        <img src="/images/arrow-drive-logo.png" alt="Arrow Drive Logo" className="logo" />
      </header>

      {/* Nav Bar */}
      <nav className="shop-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/arrow-drive" className="nav-link">Shop All</Link>
        <div className="cart-icon">🛒 ({cart.length})</div>
      </nav>

      {/* Product Grid */}
      <section className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <a href={product.external_url || '#'} className="product-link" target="_blank" rel="noopener noreferrer">
              <div className="product-image">
                <img src={product.thumbnail_url} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                {/* Optional: price if available from API */}
              </div>
            </a>
            <button onClick={() => addToCart(product)} className="add-to-cart">+ Cart</button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <img src="/images/logo-white.png" alt="Arrow Drive Logo" className="footer-logo" />
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