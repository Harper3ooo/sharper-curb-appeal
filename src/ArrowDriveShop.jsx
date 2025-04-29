import { Link } from 'react-router-dom';
import './ArrowDriveShop.css';
import { useState } from 'react';

export default function ArrowDriveShop() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'T-Shirt', category: 'Apparel', price: 25, image: '/images/products/tshirt-front.jpg', hoverImage: '/images/products/tshirt-back.jpg' },
    { id: 2, name: 'Mug', category: 'Home Goods', price: 15, image: '/images/products/mug-front.jpg', hoverImage: '/images/products/mug-back.jpg' },
    { id: 3, name: 'Hat', category: 'Accessories', price: 20, image: '/images/products/hat-front.jpg', hoverImage: '/images/products/hat-back.jpg' },
    // Add more products as needed
  ];

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
            <Link to={`/product/${product.id}`} className="product-link">
              <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
                <div className="hover-image" style={{ backgroundImage: `url(${product.hoverImage})` }}></div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
            </Link>
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