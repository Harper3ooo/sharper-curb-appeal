import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './ArrowDriveShop.css';
import { useState, useEffect } from 'react';

export default function ArrowDriveShop() {
  <Helmet>
    <title>Arrow Drive Shop | Bullcat Brands</title>
  </Helmet>

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
    <div style={{
      fontFamily: "'Open Sans', sans-serif",
      backgroundColor: "#ffffff",
      padding: "2rem",
      maxWidth: "1200px",
      margin: "0 auto"
    }}>
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

{/* Footer */}
<footer style={{
  marginTop: "4rem",
  padding: "2rem",
  backgroundColor: "#0d1b2a",
  color: "white",
  textAlign: "center",
  borderTop: "5px solid hsl(0, 100%, 50%)"
}}>
  <img src="/images/arrow-drive-white-logo.png" alt="Logo" style={{ height: "125px", marginBottom: "1rem" }} />
  <div style={{ marginBottom: "1rem" }}>
    <a href="#" style={{ marginRight: "1rem", color: "white", textDecoration: "underline" }}>Facebook</a>
    <a href="#" style={{ color: "white", textDecoration: "underline" }}>Instagram</a>
  </div>
  <div style={{ marginBottom: "1rem" }}>
    hello@bullcatbrands.com | (601) 674-0759
  </div>
  <div style={{ marginBottom: "1rem" }}>
    <a href="#" style={{ marginRight: "1rem", color: "white", textDecoration: "underline" }}>FAQ</a>
  </div>
  <div>© 2025 Arrow Drive Shop. All rights reserved.</div>
</footer>
</div>
</div> // ✅ Nested container for full page layout
);
}