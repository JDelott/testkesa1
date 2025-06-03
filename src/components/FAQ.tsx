// components/FAQ.tsx
import React from 'react';

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-bold mb-2">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: 'What is your product?',
      answer: 'Our product is a revolutionary software that simplifies your daily tasks and benefits',
    },
    {
      question: 'How do I get started?',
      answer: 'Simply sign up for a free trial, and one of our experts will guide you through the process.',
    },
    {
      question: 'What features does your product offer?',
      answer: 'Our product offers a wide range of features, including task automation, data analysis, and seamless integration with other tools.',
    },
    {
      question: 'How much does it cost?',
      answer: 'We offer flexible pricing plans to suit your needs. Check our pricing page for more details.',
    },
    {
      question: 'Do you offer customer support?',
      answer: 'Yes, we have a dedicated customer support team available 24/7 to assist you with any questions or issues.',
    },
  ];


  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <FAQ key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQSection;