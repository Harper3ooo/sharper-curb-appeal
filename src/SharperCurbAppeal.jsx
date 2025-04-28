import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SharperCurbAppeal() {
  const [orderSummary, setOrderSummary] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleAddItem = (item) => {
    setOrderSummary([...orderSummary, item]);
  };

  const handleRemoveItem = (index) => {
    const newOrder = [...orderSummary];
    newOrder.splice(index, 1);
    setOrderSummary(newOrder);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit appointment request logic here
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="sharper-curb-appeal">
      
      {/* Logo at the top */}
      <header className="header">
        <img src="/logo.png" alt="Sharper Curb Appeal Logo" className="header-logo" />
        <h2 className="slogan">
          Sharper Curb Appeal — Serving Homeowners, Businesses, Heroes, and Communities Across the Jackson-Metro Area.
        </h2>
      </header>

      {/* Mural Slider */}
      <section className="mural-slider">
        <Slider {...sliderSettings}>
          <div><img src="/mural1.jpg" alt="Mural 1" /></div>
          <div><img src="/mural2.jpg" alt="Mural 2" /></div>
          <div><img src="/mural3.jpg" alt="Mural 3" /></div>
        </Slider>
      </section>

      {/* Build Your Curb Section */}
      <section className="build-your-curb">
        <h2>Build Your Curb</h2>

        {/* Base Mural (required) */}
        <div className="option base-mural">
          <h3>Base Mural</h3>
          <p>$50 (Required)</p>
          <small>This option has been automatically added to your cart.</small>
        </div>

        {/* Other options */}
        <div className="option" onClick={() => handleAddItem('Add Logo - Basic')}>
          <h3>Add Logo - Basic</h3>
          <p>$25</p>
          <input
            type="text"
            placeholder="Specify your logo (e.g., 'Ole Miss')"
            className="logo-input"
          />
        </div>

        <div className="option" onClick={() => handleAddItem('Custom Team Logo')}>
          <h3>Custom Team Logo</h3>
          <p>$35</p>
          <input
            type="text"
            placeholder="Specify your logo (e.g., 'Mississippi Braves')"
            className="logo-input"
          />
        </div>

      </section>

      {/* Order Summary */}
      <section className="order-summary">
        <h2>Your Order Summary</h2>
        <ul>
          <li>Base Mural - $50</li>
          {orderSummary.map((item, index) => (
            <li key={index}>
              {item}
              <button className="remove-button" onClick={() => handleRemoveItem(index)}>✖</button>
            </li>
          ))}
        </ul>
      </section>

      {/* Book Your Installation Form */}
      <section className="book-installation">
        <h2>Book Your Installation</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="submit-button">
            Submit Appointment Request
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <img src="/logo.png" alt="Sharper Curb Appeal Footer Logo" className="footer-logo" />
          <div className="footer-contact">
            <p>Jackson, MS</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@sharpercurbappeal.com</p>
          </div>
          <div className="footer-social">
            {/* Replace with real links */}
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">Twitter</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sharper Curb Appeal. All rights reserved.</p>
          <div className="footer-links">
            <a href="/faq">FAQ</a>
            <a href="/policies">Policies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SharperCurbAppeal;