import { useState } from "react";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept Visa, Mastercard, PayPal, and direct bank transfers."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping usually takes 5-7 business days, depending on your location."
    },
    {
      question: "What is your return policy?",
      answer: "You can return any unused item within 30 days of purchase for a full refund."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we offer international shipping. Fees and delivery times vary by location."
    },
    {
      question: "How do I track my order?",
      answer: "After your order ships, we'll send you a tracking number by email."
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page space-y-8" style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <div className="space-y-3">
      <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
      <p className="text-xl font-semibold">Find answers to common questions about our products and services.</p>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item" style={{ marginBottom: "15px" }}>
            <h3 className="text-xl font-semibold cursor-pointer text-blue-600 mb-2"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </h3>
            {activeIndex === index && (
              <p style={{ paddingLeft: "10px", color: "#555" }}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
