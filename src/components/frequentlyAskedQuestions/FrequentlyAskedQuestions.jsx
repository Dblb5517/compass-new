import React from 'react';
import './frequentlyAskedQuestions.scss'; // Import the SCSS file

const FrequentlyAskedQuestions = () => {
  const faqData = [
    {
      question: 'What are AP exams, SAT, and Russian EGE?',
      answer:
        'AP exams are college-level exams administered by the College Board in the United States to high school students. SAT is a standardized test widely used for college admissions in the U.S. Russian EGE (Unified State Exam) is a set of standardized tests used for university admissions in Russia.',
    },
    {
      question: 'Why are these exams important?',
      answer:
        'AP exams can earn you college credits and demonstrate your academic abilities to colleges. SAT and Russian EGE are crucial for college admissions and scholarship opportunities.',
    },
    {
      question: 'When should I start preparing for these exams?',
      answer: 'Its recommended to start preparing well in advance. Ideally, you should begin studying at least several months before the exam date.'
    },
    {
      question: 'How can I create an effective study plan? ',
      answer: 'Assess your strengths and weaknesses, set realistic goals, and allocate study time for each subject or section. Consistency is key!'
    },
    {
      question: 'How can I manage test anxiety?',
      answer: 'Practice mindfulness techniques, deep breathing, and positive visualization. Make sure to get enough rest before the exam and avoid last-minute cramming.      '
    },
    {
      question: 'Is it necessary to take preparatory courses? ',
      answer: "While it's not mandatory, preparatory courses can provide valuable insights, strategies, and structured study plans."
    },
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div className="faq-item" key={index}>
          <div className="question">{item.question}</div>
          <div className="answer">{item.answer}</div>
        </div>
      ))}
    </div>
  );
};

export default FrequentlyAskedQuestions;
