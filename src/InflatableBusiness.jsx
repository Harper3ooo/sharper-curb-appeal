import { useState } from 'react';
import './InflatableBusiness.css';

export default function InflatableBusiness() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowForm(true);
  };

  const bookedDates = ['2025-05-05', '2025-05-12'];
  const today = new Date();
  const daysToShow = 30;
  const availableDates = Array.from({ length: daysToShow }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i);
    return date.toISOString().split('T')[0];
  });

  return (
    <div className="inflatable-business">
      <div className="container">
        {/* Logo Section */}
        <header className="logo-header">
          <img src="/logo.png" alt="Arrow Drive Logo" className="logo" />
        </header>

        {/* Info Section */}
        <section className="intro">
          <img src="/bowser-inflatable.jpg" alt="Bowser Inflatable" className="hero-image" />
          <h1>Reserve the Epic Bowser Inflatable!</h1>
          <p>We’re bringing this one-of-a-kind inflatable to Clinton! Reserve your event date now before spots fill up!</p>

          <h2>About This Inflatable</h2>
          <p>Main Features
            <strong>Massive Size —</strong> At 19.69 feet tall, Bowser commands attention at any event.
            <strong>Durable Construction —</strong> Crafted from premium, weather-resistant materials for both indoor and outdoor use.
            <strong>Quick Setup —</strong> Simple to inflate and deflate, allowing for fast setup, takedown, and easy storage.
            <strong>Iconic Design —</strong> Bold colors and detailed features bring the legendary King Koopa to life with stunning accuracy.
            Perfect For
            Photo Ops & Fan Experiences: A crowd magnet and unforgettable backdrop for any event.
            Trade Shows & Exhibits: A bold branding opportunity that turns heads and draws in foot traffic.
            Outdoor Festivals & Community Events: Adds fun, scale, and energy to any open-air celebration.
            This isn't just an inflatable — it's an experience.
            Book now and make your event legendary.</p>

          <h2>How to Book</h2>
          <ul>
            <li>Reserve your spot with a $175 deposit.</li>
            <li>Pick your event date (available dates will be confirmed after launch).</li>
            <li>Celebrate big once the inflatable arrives!</li>
          </ul>

          <h2>Pricing & Details</h2>
          <p><strong>Rental Price:</strong> $175 (Deposit secures your spot!)</p>
          <p><strong>Size:</strong> Approximately 20 ft tall — perfect for outdoor events!</p>
          <p><strong>Service Area:</strong> Clinton, Mississippi and surrounding areas.</p>
        </section>

        {/* Calendar Section */}
        <section className="calendar-section">
          <h2>Select Your Date</h2>
          <div className="calendar-grid">
            {availableDates.map((date) => {
              const isBooked = bookedDates.includes(date);
              return (
                <button
                  key={date}
                  className={`calendar-date ${isBooked ? 'booked' : ''}`}
                  disabled={isBooked}
                  onClick={() => handleDateSelect(date)}
                >
                  {new Date(date).toLocaleDateString()}
                </button>
              );
            })}
          </div>
        </section>

        {/* Booking Form */}
        {showForm && (
          <section className="booking-form">
            <h2>Booking for {new Date(selectedDate).toLocaleDateString()}</h2>
            <form action="/payment-link" method="POST">
              <label>
                Full Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Email Address:
                <input type="email" name="email" required />
              </label>
              <label>
                Phone Number:
                <input type="tel" name="phone" required />
              </label>
              <label>
                Event Location:
                <input type="text" name="location" required />
              </label>
              <input type="hidden" name="date" value={selectedDate} />
              <button type="submit">Pay & Book Now</button>
            </form>
          </section>
        )}
      </div>
    </div>
  );
}
