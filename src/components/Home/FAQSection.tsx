import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is Can I Try This?",
    answer:
      "It’s a platform where learners can explore real-world challenges, submit solutions, and get feedback from the community and mentors.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes, you can explore challenges and submit your solutions for free. Some advanced mentor programs may be premium.",
  },
  {
    question: "How do I submit my solution?",
    answer:
      "You can upload your work via GitHub link, screenshots, or documents under the Submit Challenge section.",
  },
  {
    question: "Can I become a mentor?",
    answer:
      "Yes! Experienced professionals can join our mentor program and help guide learners while building their profile.",
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find answers to the most common questions about our platform.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-gray-50 dark:bg-gray-900 shadow-sm"
            >
              <button
                className="flex items-center justify-between w-full text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gray-500 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
