import { useState } from 'react';

export default function SharperCurbAppeal() {
  const [cart, setCart] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const services = [
    { name: "Base Mural (House Numbers + Background Color)", price: 50 },
    { name: "Add 1 Custom Logo", price: 20 },
    { name: "Add 2 Custom Logos", price: 35 },
    { name: "Add Slogan, Family Name, or Custom Text", price: 10 },
    { name: "Add Custom Background Design (Skyline, Pattern, etc.)", price: 15 },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <img src="/images/your-logo-here.png" alt="Your Logo" style={{ height: "80px" }} />
        <h1>Sharper Curb Appeal</h1>
        <p>Serving the Jackson-Metro Area with custom curb designs that show pride and style.</p>
      </div>

      <h2>Choose Your Service:</h2>
      <div>
        {services.map((service, idx) => (
          <div key={idx} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
            <p><strong>{service.name}</strong> — ${service.price}</p>
            <button onClick={() => addToCart(service)} style={{ marginTop: "0.5rem", padding: "0.5rem" }}>Add</button>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "2rem" }}>Curb Details:</h2>
      <div style={{ marginBottom: "1rem" }}>
        <label>House Numbers:</label>
        <input
          value={addressNumber}
          onChange={(e) => setAddressNumber(e.target.value)}
          placeholder="e.g. 210"
          style={{ display: "block", marginTop: "0.5rem", padding: "0.5rem", width: "100%" }}
        />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <label>Background Color:</label>
        <input
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          placeholder="e.g. Baby Blue"
          style={{ display: "block", marginTop: "0.5rem", padding: "0.5rem", width: "100%" }}
        />
      </div>

      <h2>Your Order:</h2>
      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <p><strong>Total: ${total}</strong></p>

      <h2 style={{ marginTop: "2rem" }}>Book Your Installation:</h2>
      <div style={{ marginBottom: "1rem" }}>
        <label>Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          style={{ display: "block", marginTop: "0.5rem", padding: "0.5rem", width: "100%" }}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label>Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          style={{ display: "block", marginTop: "0.5rem", padding: "0.5rem", width: "100%" }}
        />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <label>Preferred Installation Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          style={{ display: "block", marginTop: "0.5rem", padding: "0.5rem", width: "100%" }}
        />
      </div>

      <button style={{ padding: "1rem", width: "100%", backgroundColor: "#333", color: "#fff", border: "none", marginTop: "2rem" }}>
        Submit Appointment Request
      </button>
    </div>
  );
}
