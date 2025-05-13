import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

// Sample FAQ data
const faqData = [
  {
    question: "Can I get the refund?",
    answer:
      "Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat cancellation policy: For a full refund, cancel at least 24 hours in advance of the start date of the experience. Discover and book Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by Big Boat.",
  },
  {
    question: "Can I change the travel date?",
    answer: "",
  },
  {
    question: "When and where does the tour end?",
    answer: "",
  },
  {
    question: "Do you arrange airport transfers?",
    answer: "",
  },
];

const CalenderAndFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">
      {/* Availability Calendar */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Availability Calendar
        </h2>
        <div className="border rounded-lg shadow-md p-4 w-full overflow-auto">
          {/* Replace this with your calendar component or plugin */}
          <div className="text-center text-gray-700">[Calendar Component Here]</div>
        </div>
      </div>

      <hr className="border-t" />

      {/* FAQ Section */}
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-6">FAQ</h2>
        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-4 flex justify-between items-center font-medium text-slate-800"
              >
                <span>{item.question}</span>
                <span
                  className={`w-3 h-3 rounded-full ${
                    activeIndex === index ? "bg-orange-500" : "bg-orange-100"
                  }`}
                ></span>
              </button>
              {activeIndex === index && item.answer && (
                <div className="px-4 pb-4 text-sm text-gray-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalenderAndFAQSection;
