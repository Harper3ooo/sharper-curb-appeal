import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is a curb mural?",
      answer: "A curb mural is a customized, durable design painted on your curb featuring your address, logos, slogans, or special artwork."
    },
    {
      question: "How long does a curb mural last?",
      answer: "With proper care, our murals typically last 3–5 years depending on weather and traffic conditions. We use premium outdoor paints and sealants."
    },
    {
      question: "Can I request a custom logo or theme?",
      answer: "Absolutely! You can submit custom logos, team emblems, or personal slogans when building your mural during checkout."
    },
    {
      question: "What if I don't have a mailbox or standard curb?",
      answer: "We can still work with most driveway edges or home entrances — send us a photo and we'll let you know if it's possible."
    },
    {
      question: "How long does installation take?",
      answer: "Most installations take about 30 to 45 minutes per curb once we arrive."
    },
    {
      question: "Do I need to be home for the installation?",
      answer: "No, as long as we have clear access to the curb area, we can complete the work and notify you when it's done."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently serve the Jackson-Metro Area and surrounding communities in Mississippi."
    },
    {
      question: "Is there a deposit or prepayment required?",
      answer: "Yes, we require a 75% deposit at the time of booking, with the balance due upon completion."
    },
    {
      question: "What happens if my mural fades or chips?",
      answer: "We offer affordable touch-up and recoat services. Pricing for touch-ups is subject to evaluation and will be quoted based on the condition of the mural."
    },
    {
      question: "Can I cancel or reschedule my installation?",
      answer: "Yes, you can reschedule or cancel with at least 48 hours’ notice to avoid a rescheduling fee."
    }
  ];

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      {/* Logo Link */}
      <div style={{ textAlign: "center", marginTop: "2rem", marginBottom: "2rem" }}>
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="Home Logo"
            style={{
              height: "125px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          />
        </Link>
      </div>

      {/* FAQ Content */}
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "'Open Sans', sans-serif"
      }}>
        <h1 style={{
          textAlign: "center",
          fontSize: "2.5rem",
          color: "#0d1b2a",
          marginBottom: "2rem",
          fontFamily: "'Bebas Neue', sans-serif"
        }}>
          Frequently Asked Questions
        </h1>

        {faqs.map((faq, idx) => (
          <div key={idx} style={{ marginBottom: "1.5rem" }}>
            <div
              onClick={() => toggleFAQ(idx)}
              style={{
                backgroundColor: "#f0f0f0",
                padding: "1rem",
                borderRadius: "8px",
                cursor: "pointer",
                color: "#0d1b2a",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <span>{faq.question}</span>
              <span>{openIndex === idx ? "-" : "+"}</span>
            </div>

            {openIndex === idx && (
              <div style={{
                marginTop: "0.5rem",
                backgroundColor: "#ffffff",
                border: "2px solid #0d1b2a",
                borderRadius: "8px",
                padding: "1rem",
                color: "#0d1b2a"
              }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

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
          sharpercurbappeal@gmail.com | (601) 674-0759
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <a href="#" style={{ marginRight: "1rem", color: "white", textDecoration: "underline" }}>FAQ</a>
        </div>
        <div>© 2025 Sharper Curb Appeal. All rights reserved.</div>
      </footer>
    </>
  );
}