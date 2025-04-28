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
  const [logoRequestOne, setLogoRequestOne] = useState('');
  const [logoRequestTwo, setLogoRequestTwo] = useState('');
  const [selectedServices, setSelectedServices] = useState([]);
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
    setSelectedServices([...selectedServices, item.name]);
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
        <img src="/images/logo.png" alt="Your Logo" style={{ height: "125px" }} />
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", color: "#0d1b2a" }}></h1>
        <p style={{ color: "#4a4a4a" }}>Serving the Jackson-Metro Area with custom curb designs that show pride and style.</p>
      </div>

      {/* Gallery (using real Slick slider) */}
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
              backgroundColor:
