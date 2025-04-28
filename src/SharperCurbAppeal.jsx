import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';

export default function SharperCurbAppeal() {
  const [cart, setCart] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [logoRequestOne, setLogoRequestOne] = useState('');
  const [logoRequestTwo, setLogoRequestTwo] = useState('');
  const [sloganRequest, setSloganRequest] = useState('');
  const [backgroundTemplate, setBackgroundTemplate] = useState('');
  const [houseNumberRequest, setHouseNumberRequest] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
  const [errorService, setErrorService] = useState('');

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

    let newItem = { ...item };

    if (item.name.includes("Add 1 Custom Logo")) {
      if (!logoRequestOne.trim()) {
        setErrorService(item.name);
        return;
      }
      newItem.details = logoRequestOne;
    }
    if (item.name.includes("Add 2 Custom Logos")) {
      if (!logoRequestTwo.trim()) {
        setErrorService(item.name);
        return;
      }
      newItem.details = logoRequestTwo;
    }
    if (item.name.includes("Slogan")) {
      if (!sloganRequest.trim()) {
        setErrorService(item.name);
        return;
      }
      newItem.details = sloganRequest;
    }
    if (item.name.includes("Background Design")) {
      if (!backgroundTemplate.trim()) {
        setErrorService(item.name);
        return;
      }
      newItem.details = backgroundTemplate;
    }

    setCart([...cart, newItem]);
    setSelectedServices([...selectedServices, item.name]);
    setErrorService('');
  };

  const addHouseNumberToCart = () => {
    if (!houseNumberRequest.trim()) {
      setErrorService('House Numbers');
      return;
    }

    const newItem = {
      name: "House Numbers",
      price: 0,
      details: houseNumberRequest
    };

    setCart([...cart, newItem]);
    setSelectedServices([...selectedServices, "House Numbers"]);
    setErrorService('');
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <style>
        {`
          @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>

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
          <img src="/images/logo.png" alt="Your Logo" style={{ height: "125px" }} />
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", color: "#0d1b2a" }}></h1>
          <p style={{ color: "#4a4a4a" }}>Serving Homeowners, Businesses, Heroes, and Communities Across the Jackson-Metro Area..</p>
        </div>

        {/* Gallery (Slick Slider) */}
        <Slider
          dots={true}
          infinite={true}
          speed={650}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={true}
          autoplay={true}
          autoplaySpeed={3000}
        >
          {[1, 2, 3, 4].map((num) => (
            <div key={num}>
              <img
                src={`/images/murals/mural${num}.png`}
                alt={`Mural ${num}`}
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "8px"
                }}
              />
            </div>
          ))}
        </Slider>

        {/* Build Your Mural */}
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", marginBottom: "1rem" }}>Build Your Curb:</h2>
        <div>
          {services.map((service, idx) => {
            const isBaseMural = service.name.includes("Base Mural");
            const isSelected = selectedServices.includes(service.name);

            return (
              <div key={idx} style={{
                border: `2px solid ${isSelected ? 'limegreen' : '#ccc'}`,
                padding: "1rem",
                marginBottom: "1rem",
                backgroundColor: isBaseMural ? "#f0f0f0" : "white",
                borderRadius: "8px",
                transition: "border 0.3s ease"
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
                      backgroundColor: errorService === service.name ? "#e74c3c" : "#0d1b2a",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "8px",
                      fontSize: "1rem",
                      fontWeight: "600",
                      cursor: "pointer",
                      backgroundImage: "none",
                      transition: "all 0.3s ease",
                      animation: errorService === service.name ? "shake 0.5s" : "none"
                    }}
                    onMouseEnter={(e) => {
                      if (errorService === service.name) {
                        e.target.style.backgroundColor = "#e74c3c";
                        e.target.style.backgroundImage = "none";
                        e.target.style.color = "#ffffff";
                      } else {
                        e.target.style.background = "url('/images/brushstroke-hover.png') center/cover no-repeat";
                        e.target.style.color = "#ffffff";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (errorService === service.name) {
                        e.target.style.backgroundColor = "#e74c3c";
                        e.target.style.backgroundImage = "none";
                        e.target.style.color = "#ffffff";
                      } else {
                        e.target.style.backgroundColor = "#0d1b2a";
                        e.target.style.backgroundImage = "none";
                        e.target.style.color = "#ffffff";
                      }
                    }}
                  >
                    Add
                  </button>
                )}

                {service.name === "Add 1 Custom Logo" && (
                  <div style={{ marginTop: "0.5rem" }}>
                    <input
                      value={logoRequestOne}
                      onChange={(e) => setLogoRequestOne(e.target.value)}
                      placeholder="Type the logo you want"
                      style={{
                        display: "block",
                        marginTop: "0.5rem",
                        padding: "0.5rem",
                        width: "100%",
                        borderRadius: "8px",
                        border: "1px solid",
                        borderColor: errorService === service.name ? "#e74c3c" : "#ccc",
                        backgroundColor: errorService === service.name ? "#ffe5e5" : "white"
                      }}
                    />
                    {errorService === service.name && (
                      <div style={{ color: "#e74c3c", fontSize: "0.85rem", marginTop: "0.25rem" }}>
                        Required information
                      </div>
                    )}
                  </div>
                )}

                {service.name === "Add 2 Custom Logos" && (
                  <div style={{ marginTop: "0.5rem" }}>
                    <input
                      value={logoRequestTwo}
                      onChange={(e) => setLogoRequestTwo(e.target.value)}
                      placeholder="Type the logos you want"
                      style={{
                        display: "block",
                        marginTop: "0.5rem",
                        padding: "0.5rem",
                        width: "100%",
                        borderRadius: "8px",
                        border: "1px solid",
                        borderColor: errorService === service.name ? "#e74c3c" : "#ccc",
                        backgroundColor: errorService === service.name ? "#ffe5e5" : "white"
                      }}
                    />
                    {errorService === service.name && (
                      <div style={{ color: "#e74c3c", fontSize: "0.85rem", marginTop: "0.25rem" }}>
                        Required information
                      </div>
                    )}
                  </div>
                )}

                {service.name.includes("Slogan") && (
                  <div style={{ marginTop: "0.5rem" }}>
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
                        border: "1px solid",
                        borderColor: errorService === service.name ? "#e74c3c" : "#ccc",
                        backgroundColor: errorService === service.name ? "#ffe5e5" : "white"
                      }}
                    />
                    {errorService === service.name && (
                      <div style={{ color: "#e74c3c", fontSize: "0.85rem", marginTop: "0.25rem" }}>
                        Required information
                      </div>
                    )}
                  </div>
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
                    {errorService === service.name && (
                      <div style={{ color: "#e74c3c", fontSize: "0.85rem", marginTop: "0.25rem" }}>
                        Required information
                      </div>
                    )}
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
            value={houseNumberRequest}
            onChange={(e) => setHouseNumberRequest(e.target.value)}
            placeholder="e.g. 210"
            style={{
              display: "block",
              marginTop: "0.5rem",
              padding: "0.5rem",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid",
              borderColor: errorService === "House Numbers" ? "#e74c3c" : "#ccc",
              backgroundColor: errorService === "House Numbers" ? "#ffe5e5" : "white"
            }}
          />
          {errorService === "House Numbers" && (
            <div style={{ color: "#e74c3c", fontSize: "0.85rem", marginTop: "0.25rem" }}>
              Required information
            </div>
          )}
          <button
            onClick={addHouseNumberToCart}
            style={{
              marginTop: "0.75rem",
              padding: "0.75rem 1.5rem",
              backgroundColor: errorService === "House Numbers" ? "#e74c3c" : "#0d1b2a",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              backgroundImage: "none",
              transition: "all 0.3s ease",
              animation: errorService === "House Numbers" ? "shake 0.5s" : "none"
            }}
            onMouseEnter={(e) => {
              if (errorService === "House Numbers") {
                e.target.style.backgroundColor = "#e74c3c";
                e.target.style.backgroundImage = "none";
                e.target.style.color = "#ffffff";
              } else {
                e.target.style.background = "url('/images/brushstroke-hover.png') center/cover no-repeat";
                e.target.style.color = "#ffffff";
              }
            }}
            onMouseLeave={(e) => {
              if (errorService === "House Numbers") {
                e.target.style.backgroundColor = "#e74c3c";
                e.target.style.backgroundImage = "none";
                e.target.style.color = "#ffffff";
              } else {
                e.target.style.backgroundColor = "#0d1b2a";
                e.target.style.backgroundImage = "none";
                e.target.style.color = "#ffffff";
              }
            }}
          >
            Add to Order
          </button>
        </div>

        {/* Order Summary */}
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem" }}>Your Order:</h2>
        <ul>
          {cart.map((item, idx) => (
            <li key={idx} style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "0.75rem",
              fontSize: "1rem",
              borderBottom: "1px solid #ccc",
              paddingBottom: "0.5rem"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <span><strong>{item.name}</strong> - ${item.price}</span>
                <button
                  onClick={() => removeFromCart(idx)}
                  style={{
                    backgroundColor: "#e74c3c",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "0.25rem 0.5rem",
                    cursor: "pointer",
                    height: "30px"
                  }}
                >
                  ❌
                </button>
              </div>
              {item.details && (
                <div style={{ marginTop: "0.25rem", fontSize: "0.9rem", color: "#555" }}>
                  ➔ {item.details}
                </div>
              )}
            </li>
          ))}
        </ul>
        <p style={{ fontWeight: "bold", fontSize: "1.2rem", marginTop: "1rem" }}>Total: ${total}</p>

        {/* Booking Form */}
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", marginTop: "2rem" }}>Book Your Installation:</h2>
        {/* Booking Form Inputs... (same structure you had before, can repost if needed) */}

        {/* Footer */}
        <footer style={{
          marginTop: "4rem",
          padding: "2rem",
          backgroundColor: "#0d1b2a",
          color: "white",
          textAlign: "center",
          borderTop: "5px solid #00FF00"
        }}>
          <img src="/images/logo-white.png" alt="Logo" style={{ height: "125px", marginBottom: "1rem" }} />
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
    </>
  );
}