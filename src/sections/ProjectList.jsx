import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from "framer-motion";


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const features = [
 
  {
    title: "Modern Restaurant Website",
    desc: "A visually engaging restaurant website designed to showcase the menu, atmosphere, services, and brand while making it easy for customers to discover and connect with the business.",
    media: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Educational Institute Website",
    desc: "A professional digital presence for an educational institute, featuring courses, programs, faculty information, admissions, and essential information for students and parents.",
    media: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Dental Clinic Website",
    desc: "A clean and trustworthy website for a dental clinic, designed to present treatments, doctors, facilities, and appointment information in a simple and patient-friendly experience.",
    media: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Real Estate Website",
    desc: "A modern property-focused website built to showcase listings, property details, locations, and services while helping potential buyers and tenants explore opportunities with ease.",
    media: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Restaurant Management System",
    desc: "A streamlined management solution designed to help restaurants handle daily operations, including orders, menus, tables, and essential business workflows from one place.",
    media: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Private School Website",
    desc: "A professional school website created to highlight academics, campus life, facilities, achievements, and admissions while giving parents and students a clear view of the institution.",
    media: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Gym & Fitness Website",
    desc: "A bold and engaging fitness website designed to showcase programs, trainers, facilities, memberships, and the overall gym experience while motivating visitors to take action.",
    media: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "Nursing Home Website",
    desc: "A professional healthcare website designed to communicate medical services, facilities, doctors, departments, and patient information with a clear, accessible, and reassuring experience.",
    media: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    title: "E-Commerce Website",
    desc: "A complete online shopping experience designed to showcase products, simplify product discovery, and provide customers with a smooth and responsive journey from browsing to checkout.",
    media: "https://www.w3schools.com/html/mov_bbb.mp4"
  }

  
  // Add more items here (up to 6 or 9) to expand the grid
];

const FeatureCard = ({ title, desc,  media}) => {
  return (
    <div className="card-item group relative bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl transition-colors duration-300 hover:border-emerald-500/50 flex flex-col h-full opacity-0">
      <div className="flex justify-center h-[70%] items-start mb-8">
         <video
          className=" inset-0 w-full h-full object-cover rounded-2xl"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={media }

          type="video/mp4" />
        </video>
{/*         
        <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          {tag}
        </span> */}
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

const ProjectList = () => {
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
           <div className="flex flex-col justify-center items-center gap-8 mb-20">
                 <motion.div
                   className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
                   transition={{ duration: 0.5, ease: "easeOut" }}
                 >
                    <h4 className="animate-header text-emerald-400 uppercase tracking-[0.3em] text-xs font-bold">
                     OUR WORKS
                   </h4>
               
                   <h2 className="animate-header text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                      Built to Make  <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
               Businesses Stand Out
                     </span>
                   </h2>
                 </motion.div>
               
                 <motion.div
                   className="md:w-full"
                   initial={{ opacity: 0, x: -50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true, amount: 0.3 }}
                   transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                 >
                   <p className="text-gray-400 text-lg leading-relaxed">
                    Every project we build has a purpose — to help a business look more professional, connect with its customers, and create a stronger presence online.

                            Explore our work across restaurants, clinics, education, real estate, and other growing businesses — each project designed with thoughtful UI, modern technology, and a focus on real-world business needs.
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
  )
}

export default ProjectList