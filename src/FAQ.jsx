{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ useState \} from 'react';\
\
export default function FAQPage() \{\
  const [openIndex, setOpenIndex] = useState(null);\
\
  const faqs = [\
    \{\
      question: "What is a curb mural?",\
      answer: "A curb mural is a customized, durable design painted on your curb featuring your address, logos, slogans, or special artwork."\
    \},\
    \{\
      question: "How long does a curb mural last?",\
      answer: "With proper care, our murals typically last 3\'965 years depending on weather and traffic conditions. We use premium outdoor paints and sealants."\
    \},\
    \{\
      question: "Can I request a custom logo or theme?",\
      answer: "Absolutely! You can submit custom logos, team emblems, or personal slogans when building your mural during checkout."\
    \},\
    \{\
      question: "What if I don't have a mailbox or standard curb?",\
      answer: "We can still work with most driveway edges or home entrances \'97 send us a photo and we'll let you know if it's possible."\
    \},\
    \{\
      question: "How long does installation take?",\
      answer: "Most installations take about 30 to 45 minutes per curb once we arrive."\
    \},\
    \{\
      question: "Do I need to be home for the installation?",\
      answer: "No, as long as we have clear access to the curb area, we can complete the work and notify you when it's done."\
    \},\
    \{\
      question: "What areas do you serve?",\
      answer: "We currently serve the Jackson-Metro Area and surrounding communities in Mississippi."\
    \},\
    \{\
      question: "Is there a deposit or prepayment required?",\
      answer: "Yes, we require a 75% deposit at the time of booking, with the balance due upon completion."\
    \},\
    \{\
      question: "What happens if my mural fades or chips?",\
      answer: "We offer affordable touch-up and recoat services. Pricing for touch-ups is subject to evaluation and will be quoted based on the condition of the mural."\
    \},\
    \{\
      question: "Can I cancel or reschedule my installation?",\
      answer: "Yes, you can reschedule or cancel with at least 48 hours\'92 notice to avoid a rescheduling fee."\
    \}\
  ];\
\
  const toggleFAQ = (index) => \{\
    if (openIndex === index) \{\
      setOpenIndex(null);\
    \} else \{\
      setOpenIndex(index);\
    \}\
  \};\
\
  return (\
    <div style=\{\{\
      maxWidth: "900px",\
      margin: "0 auto",\
      padding: "2rem",\
      fontFamily: "'Open Sans', sans-serif"\
    \}\}>\
      <h1 style=\{\{\
        textAlign: "center",\
        fontSize: "2.5rem",\
        color: "#0d1b2a",\
        marginBottom: "2rem",\
        fontFamily: "'Bebas Neue', sans-serif"\
      \}\}>\
        Frequently Asked Questions\
      </h1>\
\
      \{faqs.map((faq, idx) => (\
        <div key=\{idx\} style=\{\{ marginBottom: "1.5rem" \}\}>\
          <div\
            onClick=\{() => toggleFAQ(idx)\}\
            style=\{\{\
              backgroundColor: "#f0f0f0",\
              padding: "1rem",\
              borderRadius: "8px",\
              cursor: "pointer",\
              color: "#0d1b2a",\
              fontWeight: "bold",\
              display: "flex",\
              justifyContent: "space-between",\
              alignItems: "center"\
            \}\}\
          >\
            <span>\{faq.question\}</span>\
            <span>\{openIndex === idx ? "-" : "+"\}</span>\
          </div>\
\
          \{openIndex === idx && (\
            <div style=\{\{\
              marginTop: "0.5rem",\
              backgroundColor: "#ffffff",\
              border: "2px solid #0d1b2a",\
              borderRadius: "8px",\
              padding: "1rem",\
              color: "#0d1b2a"\
            \}\}>\
              \{faq.answer\}\
            </div>\
          )\}\
        </div>\
      ))\}\
    </div>\
  );\
\}}