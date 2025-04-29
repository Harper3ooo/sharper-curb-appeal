import { useState } from 'react';
import './InflatableBusiness.css';

export default function InflatableBusiness() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowForm(true);
  };

  // Placeholder booked dates; replace with real data from backend or CMS
  const bookedDates = ['2025-05-05', '2025-05-12'];
  const today = new Date();
  const daysToShow = 30; // Number of days visible in the calendar
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
          <p>This massive, custom-designed Bowser inflatable will be the centerpiece of any party or event. Great for birthdays, school events, festivals, and more!</p>

          <h2>How to Book</h2>
          <ul>
            <li>Reserve your spot with a $175 deposit.</li>
            <li>Pick your event date (available dates will be confirmed after launch).</li>
            <li>Celebrate big once the inflatable arrives!</li>
          </ul>

          <h2>Pricing & Details</h2>
          <p><strong>Rental Price:</strong> $175 (Deposit secures your spot!)</p>
          <p><strong>Size:</strong> Approximately 16 ft tall — perfect for outdoor events!</p>
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
    </div> {/* close .container */}
  </div> {/* close .inflatable-business */}
</>
);
}