import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function SharperCurbAppeal() {
  const [cart, setCart] = useState([{ name: "Base Mural (House Numbers + Background Color)", price: 50 }]);
  const [addressNumber, setAddressNumber] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [streetAddress, setStreetAddress] = useState('');

  const services = [
    { name: "Add 1 Custom Logo", price: 20 },
    { name: "Add 2 Custom Logos", price: 35 },
    { name: "Add Slogan, Family Name, or Custom Text", price: 10 },
    { name: "Add Custom Background Design (Skyline, Pattern, etc.)", price: 15 },
  ];

  const galleryImages = [
    "/images/mural1.jpg",
    "/images/mural2.jpg",
    "/images/mural3.jpg",
  ];

  const addToCart = (service) => {
    setCart([...cart, service]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/linen-texture.png')" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Hero Section */}
        <div className="flex flex-col items-center mb-10">
          <img src="/images/your-logo-here.png" alt="Logo" className="h-24 mb-4" />
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-2">
            Sharper Curb Appeal
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            Custom curb murals that show your spirit and sharpen your home's style.
          </p>
        </div>

        {/* Full Width Carousel */}
        <div className="w-full mb-12">
          <Slider {...sliderSettings}>
            {galleryImages.map((src, index) => (
              <div key={index}>
                <img src={src} alt={`Mural ${index + 1}`} className="w-full h-96 object-cover rounded-lg shadow-md" />
              </div>
            ))}
          </Slider>
        </div>

        {/* Service Menu */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Build Your Curb Mural</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="border p-6 rounded-xl shadow bg-white flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">${service.price}</p>
                </div>
                <button
                  onClick={() => addToCart(service)}
                  className="group relative py-2 px-5 overflow-hidden rounded-xl text-white font-bold bg-teal-600 hover:text-white"
                >
                  <span className="absolute inset-0 bg-lime-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  <span className="relative z-10">Add</span>
                </button>
              </div>
            ))}
          </div>
        </div>

     {/* Order Summary */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Your Order Summary</h2>
          <ul className="space-y-2 mb-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between bg-white p-4 rounded-lg shadow">
                <span>{item.name}</span>
                {item.name !== "Base Mural (House Numbers + Background Color)" && (
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Remove
                  </button>
                )}
              </li>
            ))}
          </ul>
          <div className="text-2xl font-bold text-center text-teal-700 mb-8">Total: ${total}</div>
        </div>

        {/* Curb Details Form */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Curb Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              className="p-3 border rounded-lg"
              placeholder="House Numbers (e.g. 210)"
              value={addressNumber}
              onChange={(e) => setAddressNumber(e.target.value)}
            />
            <input
              className="p-3 border rounded-lg"
              placeholder="Background Color (e.g. Baby Blue)"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
          </div>
        </div>

        {/* Appointment Form */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Book Your Installation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              className="p-3 border rounded-lg"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="p-3 border rounded-lg"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="p-3 border rounded-lg"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className="p-3 border rounded-lg"
              placeholder="Street Address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
            />
          </div>
          <div className="flex justify-center mt-8">
            <button
              className="group relative py-3 px-8 overflow-hidden rounded-xl text-white font-bold bg-blue-900 hover:text-white"
            >
              <span className="absolute inset-0 bg-lime-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              <span className="relative z-10">Submit Appointment Request</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-blue-900 text-white py-10 mt-20 rounded-t-3xl">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <img src="/images/your-logo-here.png" alt="Logo" className="h-16 mx-auto md:mx-0 mb-4" />
              <p className="text-sm">Sharper Curb Appeal © {new Date().getFullYear()}</p>
              <p className="text-sm">All rights reserved.</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Contact</h3>
              <p className="text-sm">Email: info@sharpercurb.com</p>
              <p className="text-sm">Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Links</h3>
              <a href="#" className="block text-sm hover:underline">FAQ</a>
              <a href="#" className="block text-sm hover:underline">Policies</a>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#"><img src="/images/facebook-icon.png" alt="Facebook" className="h-6" /></a>
                <a href="#"><img src="/images/instagram-icon.png" alt="Instagram" className="h-6" /></a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
