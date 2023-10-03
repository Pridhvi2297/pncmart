import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import {faqData} from "../static/FAQData"; // Fix the import statement

const FAQPage = () => {
  return (
    <div className="bg-gray-100">
      <Header activeHeading={5} />
      <Faq />
      <Footer />
    </div>
  );
};

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const showFAQ = (index) => {
    if (activeTab === index) {
      setActiveTab(0);
    } else {
      setActiveTab(index);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {/* FAQ Items */}
        {faqData.map((item, index) => (
          <div className="border border-gray-300 rounded p-4" key={index}>
            <button
              className="flex items-center justify-between w-full focus:outline-none"
              onClick={() => showFAQ(index + 1)}
            >
              <span className="text-lg font-medium text-gray-800">
                {item.question}
              </span>
              {activeTab === index + 1 ? (
                <AiOutlineUp className="h-6 w-6 text-gray-500 transform rotate-180" />
              ) : (
                <AiOutlineDown className="h-6 w-6 text-gray-500" />
              )}
            </button>
            {activeTab === index + 1 && (
              <div className="mt-4">
                <p className="text-base text-gray-600">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
