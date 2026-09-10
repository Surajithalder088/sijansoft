import React, { useState,useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Button from '../components/Button'
import WhyUs from '../sections/WhyUs'
import StartProject from '../sections/StartProject'
import FaQ from '../sections/FaQ'
import Footer from '../sections/Footer'
import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import Header from '../components/Header'




const BookAppoinment = () => {

  //for seo
  useEffect(() => {
  document.title = "Start a Project | SijanSoft";

  const description =
    "Start your website or software project with SijanSoft. Discuss your requirements and get a project consultation.";

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

  canonical.setAttribute("href", "https://sijansoft.in/start-project");
}, []);
     const isMobile= useMediaQuery({query:'(max-width:768px)'})
    const navigate = useNavigate();
        const[headerMenuOpen,setHeaderMenuOpen]=useState(false)
        const location = useLocation();
        const currentPath = location.pathname;

  return (
   <>
   <div className='relative'>

   <Header/>


      {  <section style={{position: "relative"}}
        className={`
          ${isMobile ? 'h-[60vh]' : 'h-[60vh]'} w-full rounded-t-4xl 
          flex items-center justify-center
          relative overflow-hidden
          transition-all duration-300
           
        `}
      >

        {/* 🔥 FULL BACKGROUND VIDEO */}
        <video
          className="absolute inset-0 w-full h-full object-cover h-[60vh]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={isMobile ? "https://res.cloudinary.com/dbxx49ers/video/upload/v1788252057/service-m_wombzg.mp4" :
           "https://res.cloudinary.com/dbxx49ers/video/upload/v1788252057/service-w_s9kvey.mp4"} 
          type="video/mp4" />
        </video>
          <div className="absolute inset-0">
    <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/10" />
  </div>

      </section>}
      <StartProject/>
      <WhyUs/>
      <FaQ/>
      <Footer/>

   </div>
   </>
  )
}

export default BookAppoinment