import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';

export default function SharperCurbAppeal() {
  const [cart, setCart] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [logoRequest, setLogoRequest] = useState('');
  const [sloganRequest, setSloganRequest] = useState('');
  const [backgroundTemplate, setBackgroundTemplate] = useState('');

  const services = [
    { name: "Base Mural (House Numbers + Background Color)", price: 50 },
    { name: "Add 1 Custom Logo", price: 20 },
    { name: "Add 2 Custom Logos", price: 35 },
    { name: "Add Slogan, Family Name, or Custom Text", price: 10 },
    { name: "Add Custom Background Design", price: 15 },
  ];

  useEffect(() => {
    const hasBaseMural = cart.some((item) => item.name.includes("Base Mural"));
    if (!hasBaseMural) {
      setCart([{ name: "Base Mural (House Numbers + Background Color)", price: 50 }]);
    }
  }, []);

  const addToCart = (item) => {
    const hasBaseMural = cart.some((c) => c.name.includes("Base Mural"));
    if (!hasBaseMural && !item.name.includes("Base Mural")) {
      alert("You must have the Base Mural in your order first.");
      return;
    }
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{
      fontFamily: "'Open Sans', sans-serif",
      background: "url('/images/background-texture.png') repeat",
      backgroundColor: "#ffffff",
      padding: "2rem",
      maxWidth: "1200px",
      margin: "0 auto"
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <img src="/images/your-logo-here.png" alt="Your Logo" style={{ height: "80px" }} />
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", color: "#0d1b2a" }}>Sharper Curb Appeal</h1>
        <p style={{ color: "#4a4a4a" }}>Serving the Jackson-Metro Area with custom curb designs that show pride and style.</p>
      </div>

      {/* Gallery */}
      <div style={{ overflowX: "scroll", whiteSpace: "nowrap", marginBottom: "2rem" }}>
        {[1, 2, 3, 4].map((num) => (
          <img
            key={num}
            src={`/images/murals/mural${num}.jpg`}
            alt={`Mural ${num}`}
            style={{ width: "250px", height: "150px", objectFit: "cover", marginRight: "1rem", borderRadius: "8px" }}
          />
        ))}
      </div>

      {/* Build Your Mural */}
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", marginBottom: "1rem" }}>Build Your Curb Mural:</h2>
      <div>
        {services.map((service, idx) => {
          const isBaseMural = service.name.includes("Base Mural");
          return (
            <div key={idx} style={{
              border: "1px solid #ccc",
              padding: "1rem",
              marginBottom: "1rem",
              backgroundColor: isBaseMural ? "#f0f0f0" : "white",
              borderRadius: "8px"
            }}>
              <p><strong>{service.name}</strong> — ${service.price}</p>
              {isBaseMural ? (
                <p style={{ color: "#888", fontStyle: "italic", marginTop: "0.5rem" }}>Automatically added to your cart</p>
              ) : (
                <button
                  onClick={() => addToCart(service)}
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.75rem 1.5rem",
                    backgroundColor: "#0d1b2a",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    backgroundImage: "none",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "url('/images/brushstroke-hover.png') center/cover no-repeat";
                    e.target.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#0d1b2a";
                    e.target.style.backgroundImage = "none";
                    e.target.style.color = "#ffffff";
                  }}
                >
                  Add
                </button>
              )}
              {service.name.includes("Logo") && (
                <input
                  value={logoRequest}
                  onChange={(e) => setLogoRequest(e.target.value)}
                  placeholder="Type the logo you want"
                  style={{
                    display: "block",
                    marginTop: "0.5rem",
                    padding: "0.5rem",
                    width: "100%",
                    borderRadius: "8px",
                    border: "1px solid #ccc"
                  }}
                />
              )}
              {service.name.includes("Slogan") && (
                <input
                  value={sloganRequest}
                  onChange={(e) => setSloganRequest(e.target.value)}
                  placeholder="Type your slogan or family name"
                  style={{
                    display: "block",
                    marginTop: "0.5rem",
                    padding: "0.5rem",
                    width: "100%",
                    borderRadius: "8px",
                    border: "1px solid #ccc"
                  }}
                />
              )}
              {service.name.includes("Background Design") && (
                <div style={{ marginTop: "0.5rem" }}>
                  <label>Select Background:</label>
                  <div>
                    {["American Flag", "Beach", "Magnolia", "City Skyline", "Sports Field"].map((bg) => (
                      <label key={bg} style={{ display: "block", marginTop: "0.25rem" }}>
                        <input
                          type="radio"
                          name="backgroundTemplate"
                          value={bg}
                          checked={backgroundTemplate === bg}
                          onChange={(e) => setBackgroundTemplate(e.target.value)}
                        /> {bg}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Curb Details */}
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", marginTop: "2rem" }}>Curb Details:</h2>
      <div style={{ marginBottom: "1rem" }}>
        <label>House Numbers:</label>
        <input
          value={addressNumber}
          onChange={(e) => setAddressNumber(e.target.value)}
          placeholder="e.g. 210"
          style={{
            display: "block",
            marginTop: "0.5rem",
            padding: "0.5rem",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <label>Background Color:</label>
        <input
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          placeholder="e.g. Baby Blue"
          style={{
            display: "block",
            marginTop: "0.5rem",
            padding: "0.5rem",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />
      </div>

      {/* Order Summary */}
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem" }}>Your Order:</h2>
      <ul>
        {cart.map((item, idx) => (
          <li key={idx} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.5rem",
            fontSize: "1rem"
          }}>
            <span>{item.name} - ${item.price}</span>
            <button
              onClick={() => removeFromCart(idx)}
              style={{
                backgroundColor: "#e74c3c",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "0.25rem 0.5rem",
                cursor: "pointer"
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
      <p style={{ fontWeight: "bold", fontSize: "1.2rem", marginTop: "1rem" }}>Total: ${total}</p>

      {/* Booking Form */}
      <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", marginTop: "2rem" }}>Book Your Installation:</h2>
      <div style={{ marginBottom: "1rem" }}>
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          style={{
            display: "block",
            marginTop: "0.5rem",
            padding: "0.5rem",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          style={{
            display: "block",
            marginTop: "0.5rem",
            padding: "0.5rem",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label>Street Address:</label>
        <input
          value={streetAddress}
          onChange={(e) => setStreetAddress(e.target.value)}
          placeholder="Street Address"
          style={{
            display: "block",
            marginTop: "0.5rem",
            padding: "0.5rem",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <label>Phone Number:</label>
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Phone Number"
          style={{
            display: "block",
            marginTop: "0.5rem",
            padding: "0.5rem",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <label>Preferred Installation Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={{
            display: "block",
            marginTop: "0.5rem",
            padding: "0.5rem",
            width: "100%",
            borderRadius: "8px",
            border: "1px solid #ccc"
          }}
        />
      </div>

      <button style={{
        padding: "1rem",
        width: "100%",
        backgroundColor: "#0d1b2a",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        marginTop: "2rem",
        fontSize: "1.2rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "all 0.3s ease"
      }}>
        Submit Appointment Request
      </button>

      {/* Footer */}
      <footer style={{
        marginTop: "4rem",
        padding: "2rem",
        backgroundColor: "#0d1b2a",
        color: "white",
        textAlign: "center",
        borderTop: "5px solid #00FF00"
      }}>
        <img src="/images/your-logo-here.png" alt="Logo" style={{ height: "50px", marginBottom: "1rem" }} />
        <div style={{ marginBottom: "1rem" }}>
          <a href="#" style={{ marginRight: "1rem", color: "white", textDecoration: "underline" }}>Facebook</a>
          <a href="#" style={{ color: "white", textDecoration: "underline" }}>Instagram</a>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          Contact: sharpercurbappeal@email.com | (555) 555-5555
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <a href="#" style={{ marginRight: "1rem", color: "white", textDecoration: "underline" }}>FAQ</a>
          <a href="#" style={{ color: "white", textDecoration: "underline" }}>Policies</a>
        </div>
        <div>© 2025 Sharper Curb Appeal. All rights reserved.</div>
      </footer>
    </div>
  );
}