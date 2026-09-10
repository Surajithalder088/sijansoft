import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Button from '../components/Button'
import Footer from '../sections/Footer.jsx'
import FaQ from '../sections/FaQ.jsx'
import ExperienceSection from '../sections/ExperienceSection.jsx'
import WhyUs from '../sections/WhyUs.jsx'
import { useLocation } from "react-router-dom";
import Header from '../components/Header.jsx'





const About = () => {
  //for seo
  useEffect(() => {
  document.title = "About SH TECH LABS | Developing The Future Of Digital Infrastructure";

  const description =
    "Learn about SH TECH LABS, a software and digital solutions agency helping businesses build modern websites and software solutions.";

  let meta = document.querySelector('meta[name="description"]');

  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", description);

  let canonical = document.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", "https://sijansoft.in/about");
}, []);
   const isMobile= useMediaQuery({query:'(max-width:768px)'})
    const[headerMenuOpen,setHeaderMenuOpen]=useState(false)
    const location = useLocation();
    const currentPath = location.pathname;
  return (
    <div className='relative'>
  <Header/>

        <div className="relative w-full h-[100vh] overflow-hidden">

  {/* Background Image */}
  <img
    src="/images/about-hero.jpeg"
    alt="About SH TECH LABS"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 z-10">
    <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />
  </div>

  {/* Content */}
  <div className="relative z-20 w-full h-full flex flex-col items-center justify-center px-6 md:px-30 text-white">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-8">About Us</h1>
    <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
      We Build 
       <span className="text-transparent bg-clip-text bg-gradient-to-r px-5 from-blue-400 to-emerald-400">
                Digital Solutions 
              </span>
       That Help Businesses Grow
    </h1>

    <p className="max-w-4xl text-center text-base md:text-lg leading-relaxed text-white">
      At SH TECH LABS, we help businesses turn their ideas and challenges
      into practical digital solutions. From professional websites and
      custom software to modern applications and business automation,
      we create technology designed around real business needs. Our goal
      is simple: make your business more visible, efficient, and ready to
      grow in the digital world. Whether you're a startup, local business,
      clinic, school, restaurant, or growing company, we combine thoughtful
      design, reliable technology, and a business-focused approach to
      deliver solutions that create lasting value.
    </p>

  </div>

</div>
<WhyUs/>
      

   <FaQ/>
       <Footer/>
    </div>
  )
}

export default About