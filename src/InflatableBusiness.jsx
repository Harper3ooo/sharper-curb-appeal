import { useState } from 'react';
import Slider from 'react-slick'; // Import Slick Slider
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

  const bookedDates = [
    '2025-05-01', '2025-05-02', '2025-05-03', // Booked dates in May
    '2025-06-01', '2025-06-02', '2025-06-03', // Booked dates in June
    // Add more booked dates here as needed
  ];

  const today = new Date();
  const daysToShow = 180; // Extend the calendar to show 180 days (up to October)
  const availableDates = Array.from({ length: daysToShow }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i);
    return date.toISOString().split('T')[0];
  });

  // Pricing adjustment logic
  const pricePerDay = 175;
  const totalPrice = numDays * pricePerDay;

  // Slick Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Generate the months and days to be displayed in each accordion section
  const generateMonthDates = (month, year) => {
    const monthStart = new Date(year, month, 1);
    const monthEnd = new Date(year, month + 1, 0);
    const daysInMonth = [];
    for (let day = monthStart.getDate(); day <= monthEnd.getDate(); day++) {
      const date = new Date(year, month, day).toISOString().split('T')[0];
      daysInMonth.push(date);
    }
    return daysInMonth;
  };

  return (
    <div className="inflatable-business">
      <div className="container">
        {/* Logo Section */}
        <header className="logo-header">
          <img src="/logo.png" alt="Arrow Drive Logo" className="logo" />
        </header>

        {/* Slider Section */}
        <section className="slider-section">
          <Slider {...sliderSettings}>
            <div>
              <img src="/Bowser1.jpg" alt="Inflatable Slider Image 1" />
            </div>
            <div>
              <img src="/Bowser2.jpg" alt="Inflatable Slider Image 2" />
            </div>
            <div>
              <img src="/Bowser3.jpg" alt="Inflatable Slider Image 3" />
            </div>
          </Slider>
        </section>

        {/* Info Text */}
        <section className="intro">
          <h1>Reserve the Epic Bowser Inflatable!</h1>
          <p>Perfect for photo ops and fan experiences, this inflatable is a crowd magnet and an unforgettable backdrop for any event. It’s also ideal for trade shows and exhibits, offering a bold branding opportunity that turns heads and draws foot traffic. At outdoor festivals and community events, it adds fun, scale, and energy to any open-air celebration. This isn't just an inflatable — it's an experience. Book now and make your event legendary.</p>
        </section>

                {/* Details Section */}
                <section className="details-section">
          <h2>Details</h2>
          <ul>
            <li><strong>Massive Size —</strong> At 19.69 feet tall, This Bowser inflatable commands attention at any event.</li>
            <li><strong>Durable Construction —</strong> Crafted from premium, weather-resistant materials for both indoor and outdoor use.</li>
            <li><strong>Quick Setup —</strong> Simple to inflate and deflate, allowing for fast setup, takedown, and easy storage.</li>
            <li><strong>Iconic Design —</strong> Bold colors and detailed features bring the legendary King Koopa to life with stunning accuracy.</li>
          </ul>
        </section>

        {/* How to Book Section */}
        <section className="how-to-book-section">
          <h2>How to Book</h2>
          <ul>
            <li>Reserve your spot with a $175 deposit.</li>
            <li>Pick your event date (available dates will be confirmed after launch).</li>
            <li>Select your event timeframe (morning, afternoon, or specific hours).</li>
            <li>Celebrate big once the inflatable arrives!</li>
          </ul>
        </section>

        {/* Pricing & Details Section */}
        <section className="pricing-details-section">
          <h2>Pricing & Details</h2>
          <p><strong>Rental Price:</strong> ${pricePerDay} per day (includes up to 6 consecutive hours of inflatable use)</p>
          <p><strong>Additional Hours:</strong> $50/hour (by request and availability)</p>
          <p><strong>Multiple Days:</strong> Add extra days at $175/day</p>
          <p><strong>Service Area:</strong> Clinton, MS and surrounding areas</p>
          <p><strong>Deposit:</strong> A $175 non-refundable deposit secures your date</p>
        </section>

        {/* Book Your Date Title */}
        <section className="book-your-date-section">
          <h1>Book Your Date</h1>
        </section>

        {/* Accordion Section for Date Selector */}
        <section className="accordion-section">
          {/* May 2025 */}
          <div className="accordion-item">
            <h2 className="accordion-title" onClick={() => toggleAccordion('may')}>
              May 2025
            </h2>
            {activeAccordion === 'may' && (
              <div className="accordion-content">
                <div className="calendar-grid">
                  {generateMonthDates(4, 2025).map((date) => {
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
              </div>
            )}
          </div>

          {/* June 2025 */}
          <div className="accordion-item">
            <h2 className="accordion-title" onClick={() => toggleAccordion('june')}>
              June 2025
            </h2>
            {activeAccordion === 'june' && (
              <div className="accordion-content">
                <div className="calendar-grid">
                  {generateMonthDates(5, 2025).map((date) => {
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
              </div>
            )}
          </div>

          {/* July 2025 */}
          <div className="accordion-item">
            <h2 className="accordion-title" onClick={() => toggleAccordion('july')}>
              July 2025
            </h2>
            {activeAccordion === 'july' && (
              <div className="accordion-content">
                <div className="calendar-grid">
                  {generateMonthDates(6, 2025).map((date) => {
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
              </div>
            )}
          </div>

          {/* August 2025 */}
          <div className="accordion-item">
            <h2 className="accordion-title" onClick={() => toggleAccordion('august')}>
              August 2025
            </h2>
            {activeAccordion === 'august' && (
              <div className="accordion-content">
                <div className="calendar-grid">
                  {generateMonthDates(7, 2025).map((date) => {
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
              </div>
            )}
          </div>

          {/* September 2025 */}
          <div className="accordion-item">
            <h2 className="accordion-title" onClick={() => toggleAccordion('september')}>
              September 2025
            </h2>
            {activeAccordion === 'september' && (
              <div className="accordion-content">
                <div className="calendar-grid">
                  {generateMonthDates(8, 2025).map((date) => {
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
              </div>
            )}
          </div>

          {/* October 2025 */}
          <div className="accordion-item">
            <h2 className="accordion-title" onClick={() => toggleAccordion('october')}>
              October 2025
            </h2>
            {activeAccordion === 'october' && (
              <div className="accordion-content">
                <div className="calendar-grid">
                  {generateMonthDates(9, 2025).map((date) => {
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
              </div>
            )}
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

      {/* Footer */}
      <footer style={{
        marginTop: "4rem",
        padding: "2rem",
        backgroundColor: "#0d1b2a",
        color: "white",
        textAlign: "center",
        borderTop: "5px solid hsl(0, 100%, 50%)"
      }}>
        <img src="/images/logo-white.png" alt="Logo" style={{ height: "125px", marginBottom: "1rem" }} />
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
        <div>© 2025 Showtime Inflatables. All rights reserved.</div>
      </footer>
    </div> // ✅ Closing for the main .container div
  );
}