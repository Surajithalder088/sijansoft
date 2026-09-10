import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What types of companies do you typically work with?",
    answer: "We primarily partner with Series A+ startups and established enterprises in the FinTech, HealthTech, and SaaS sectors that require high-performance, scalable infrastructure."
  },
  {
    question: "How do you price your engagements?",
    answer: "Our pricing is value-based and depends on the scope of the project. We typically work on a monthly retainer or fixed-project basis for well-defined engineering milestones."
  },
  {
    question: "What does the onboarding process look like?",
    answer: "Onboarding starts with a deep-dive technical discovery phase, followed by setting up communication channels, security protocols, and integrating our senior team into your existing workflow."
  },
  {
    question: "How do you ensure code quality and maintainability?",
    answer: "We enforce strict PR reviews, 90%+ test coverage, and automated CI/CD pipelines. Every line of code is written to be scalable and easily hand-off ready."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we provide dedicated maintenance windows and SLA-backed support plans to ensure your application remains performant and secure after deployment."
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-6 px-2 text-left group transition-all"
      >
        <span className={`text-[17px] font-semibold transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-500'}`}>
          {question}
        </span>
        <div className={`flex items-center justify-center w-6 h-6 rounded-full border border-gray-200 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
          <span className="text-lg leading-none">+</span>
        </div>
      </button>
      
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="px-2 text-gray-500 leading-relaxed text-sm">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FaQ = () => {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(2); // Matches image where "Onboarding" is active

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-text", {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      gsap.from(".animate-faq", {
        opacity: 0,
        x: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left Column: Heading & CTA */}
        <div className="lg:w-2/5 space-y-8">
          <div className="animate-text">
            <h4 className="text-blue-400 uppercase tracking-widest text-xs font-bold mb-4">
              FAQ
            </h4>
            <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
              Everything you <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                need to know
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Straight answers to the questions clients ask before starting a project with us.
            </p>
          </div>

          {/* Consultation Card */}
          <div className="animate-text bg-blue-50/5 border border-blue-500/10 p-8 rounded-2xl">
            <h3 className="text-white text-xl font-bold mb-3">Still have questions?</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Book a free 30-minute technical consultation with one of our senior engineers.
            </p>
            <a href="#" className="text-blue-400 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
              Book a call <span className="text-xl">→</span>
            </a>
          </div>
        </div>

        {/* Right Column: Accordion Container */}
        <div className="animate-faq lg:w-3/5 bg-white rounded-[32px] p-8 md:p-12">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaQ;