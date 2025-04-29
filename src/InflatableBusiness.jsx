import { useState } from 'react';
import './InflatableBusiness.css';

export default function InflatableBusiness() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [numDays, setNumDays] = useState(1); // Track number of days for booking
  const [timeframe, setTimeframe] = useState(''); // Track selected timeframe
  const [activeAccordion, setActiveAccordion] = useState(null); // Track active accordion section

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setShowForm(true);
  };

  const handleDayChange = (event) => {
    setNumDays(event.target.value);
  };

  const handleTimeframeSelect = (event) => {
    setTimeframe(event.target.value);
  };

  const toggleAccordion = (section) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  const bookedDates = ['2025-05-05', '2025-05-12'];
  const today = new Date();
  const daysToShow = 30;
  const availableDates = Array.from({ length: daysToShow }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i);
    return date.toISOString().split('T')[0];
  });

  // Pricing adjustment logic
  const pricePerDay = 175;
  const totalPrice = numDays * pricePerDay;

  return (
    <div className="inflatable-business">
      <div className="container">
        {/* Logo Section */}
        <header className="logo-header">
          <img src="/logo.png" alt="Arrow Drive Logo" className="logo" />
        </header>

        {/* Slider Section */}
        <section className="slider-section">
          {/* Add your slider component here */}
          <div className="slider">
            {/* You can integrate a slider component or use CSS/JS for it */}
            <img src="/bowser-slider-1.jpg" alt="Inflatable Slider Image 1" />
            <img src="/bowser-slider-2.jpg" alt="Inflatable Slider Image 2" />
          </div>
        </section>

        {/* Info Section */}
        <section className="intro">
          <img src="/bowser-inflatable.jpg" alt="Bowser Inflatable" className="hero-image" />
          <h1>Reserve the Epic Bowser Inflatable!</h1>
          <p>Perfect for photo ops and fan experiences, this inflatable is a crowd magnet and an unforgettable backdrop for any event. It’s also ideal for trade shows and exhibits, offering a bold branding opportunity that turns heads and draws foot traffic. At outdoor festivals and community events, it adds fun, scale, and energy to any open-air celebration. This isn't just an inflatable — it's an experience. Book now and make your event legendary.</p>
        </section>

        {/* Accordion Section for Details, How to Book, and Pricing */}
        <section className="accordion-section">
          <div className="accordion-item">
            <h2 className="accordion-title" onClick={() => toggleAccordion('details')}>
              Details
            </h2>
            {activeAccordion === 'details' && (
              <div className="accordion-content">
                <ul>
                  <li><strong>Massive Size —</strong> At 19.69 feet tall, Bowser commands attention at any event.</li>
                  <li><strong>Durable Construction —</strong> Crafted from premium, weather-resistant materials for both indoor and outdoor use.</li>
                  <li><strong>Quick Setup —</strong> Simple to inflate and deflate, allowing for fast setup, takedown, and easy storage.</li>
                  <li><strong>Iconic Design —</strong> Bold colors and detailed features bring the legendary King Koopa to life with stunning accuracy.</li>
                </ul>
              </div>
            )}
          </div>

          <div className="accordion-item">
            <h2 className="accordion-title" onClick={() => toggleAccordion('how-to-book')}>
              How to Book
            </h2>
            {activeAccordion === 'how-to-book' && (
              <div className="accordion-content">
                <ul>
                  <li>Reserve your spot with a $175 deposit.</li>
                  <li>Pick your event date (available dates will be confirmed after launch).</li>
                  <li>Select your event timeframe (morning, afternoon, or specific hours).</li>
                  <li>Celebrate big once the inflatable arrives!</li>
                </ul>
              </div>
            )}
          </div>

          <div className="accordion-item">
            <h2 className="accordion-title" onClick={() => toggleAccordion('pricing')}>
              Pricing & Details
            </h2>
            {activeAccordion === 'pricing' && (
              <div className="accordion-content">
                <p><strong>Rental Price:</strong> ${pricePerDay} per day (includes up to 6 consecutive hours of inflatable use)</p>
                <p><strong>Additional Hours:</strong> $50/hour (by request and availability)</p>
                <p><strong>Multiple Days:</strong> Add extra days at $175/day</p>
                <p><strong>Service Area:</strong> Clinton, MS and surrounding areas</p>
                <p><strong>Deposit:</strong> A $175 non-refundable deposit secures your date</p>
              </div>
            )}
          </div>
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
              <label>
                Event Date:
                <input type="date" name="eventDate" required />
              </label>
              <label>
                Preferred Delivery Window:
                <input type="text" name="deliveryWindow" placeholder="e.g., 9-11 AM" required />
              </label>
              <label>
                Preferred Pickup Window:
                <input type="text" name="pickupWindow" placeholder="e.g., 5-7 PM" required />
              </label>
              <label>
                Number of Rental Days:
                <select name="numDays" value={numDays} onChange={handleDayChange}>
                  <option value="1">1 Day</option>
                  <option value="2">2 Days</option>
                  <option value="3">3 Days</option>
                </select>
              </label>
              <label>
                Additional Hours Needed?
                <select name="additionalHours" value={timeframe} onChange={handleTimeframeSelect}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </label>
              <label>
                Special Instructions (optional):
                <textarea name="specialInstructions"></textarea>
              </label>
              <label>
                <input type="checkbox" name="depositAgreement" required />
                I agree to the $175 non-refundable deposit.
              </label>
              <button type="submit">Pay & Book Now</button>
            </form>
          </section>
        )}
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-contact">
          <p>arrowdrive@gmail.com | (601) 674-0759</p>
        </div>
        <div className="footer-copy">
          <p>© {new Date().getFullYear()} Arrow Drive. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}