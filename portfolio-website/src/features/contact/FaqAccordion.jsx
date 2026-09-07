import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Are you available for internships?",
    answer:
      "Yes! As a final-year student, I am actively seeking full-time opportunities and internships starting Summer 2024.",
  },
  {
    question: "What is your primary tech stack?",
    answer:
      "I am most proficient in Java, JavaScript (React/Node), and Python, though I am language-agnostic when solving architecture problems.",
  },
  {
    question: "Do you work on mobile applications?",
    answer:
      "I specialize in progressive web apps and cross-platform solutions using React Native.",
  },
];

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-outline-variant/30 rounded-xl overflow-hidden bg-surface-container-high">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 p-5 text-left font-bold text-lg hover:text-primary transition-colors"
      >
        <span>{question}</span>
        <span
          class={`material-symbols-outlined text-on-surface-variant shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          data-icon="add"
          aria-hidden="true"
        >
          add
        </span>
      </button>
      <div
        class={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-on-surface-variant leading-relaxed border-t border-outline-variant/20 pt-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggle(index) {
    setOpenIndex((current) => (current === index ? -1 : index));
  }

  return (
    <div className="space-y-4">
      {FAQ_ITEMS.map((item, index) => (
        <FaqItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
}
