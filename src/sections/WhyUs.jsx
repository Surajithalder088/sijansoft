import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from "framer-motion";


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Senior engineers only",
    desc: "Every project is staffed exclusively with senior-level engineers (5+ years). No juniors, no delegation to trainees. You get expert hands from day one.",
    tag: "5+ yrs avg exp",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Scalable architecture",
    desc: "We design for tomorrow, not just today. Every system we build is architected to scale horizontally, maintain clean separation of concerns, and survive team transitions.",
    tag: "Zero tech debt philosophy",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Performance-focused",
    desc: "Sub-100ms LCP, Core Web Vitals at 90+, optimized database queries, and efficient API design are non-negotiables on every engagement.",
    tag: "< 100ms target LCP",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
   {
    title: "Security by design",
    desc: "We bake security into every layer — from RBAC and JWT handling to input sanitization, audit logs, and infrastructure hardening. Not an afterthought.",
    tag: "OWASP Top 10 compliant",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Long-term partnership",
    desc: "We don't disappear after launch. Our post-delivery support SLAs, retainer models, and dedicated Slack channels ensure you're never left without engineering support.",
    tag: "99% client retention",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Full transparency",
    desc: "Weekly engineering reports, live project boards, and direct access to your engineers — not a project manager buffer. You always know exactly where your project stands.",
    tag: "Daily progress updates",
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
  // Add more items here (up to 6 or 9) to expand the grid
];

const FeatureCard = ({ title, desc, tag, icon }) => {
  return (
    <div className="card-item group relative bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl transition-colors duration-300 hover:border-emerald-500/50 flex flex-col h-full opacity-0">
      <div className="flex justify-between items-start mb-8">
        <div className="p-2 bg-gray-900 rounded-lg">
          {icon}
        </div>
        <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          {tag}
        </span>
      </div>
      
      <h3 className="text-white text-xl font-bold mb-4 tracking-tight">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  );
};

const WhyUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".card-item", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Starts animation when top of section hits 80% of viewport
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black py-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
       <div className="flex flex-col justify-between items-start gap-8 mb-20">
             <motion.div
               className="md:w-1/2"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.5, ease: "easeOut" }}
             >
               <h4 className="text-blue-400 uppercase tracking-[0.2em] text-xs font-bold mb-4">
                 WHY SH TECH LABS
               </h4>
           
               <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight">
                 Built for teams that <br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
        won't compromise
                 </span>
               </h2>
             </motion.div>
           
             <motion.div
               className="md:w-1/3"
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
             >
               <p className="text-gray-400 text-lg leading-relaxed">
                 We've seen what happens when companies ship fast without thinking
                 long-term. SH TECH LABS was built as the alternative — a place where
                 engineering excellence isn't a differentiator, it's the baseline.
               </p>
             </motion.div>
           </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{
                 duration: 0.4,
                 delay: index * 0.15,
               }}
             >
            <FeatureCard key={index} {...feature} />
            </motion.div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default WhyUs;