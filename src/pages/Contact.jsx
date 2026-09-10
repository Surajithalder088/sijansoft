import React, { useState,useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Footer from '../sections/Footer'
import FaQ from '../sections/FaQ'
import Button from '../components/Button'
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Header from '../components/Header'




const Contact = () => {
  useEffect(() => {
  document.title = "Contact SijanSoft | Get in Touch";

  const description =
    "Contact SijanSoft for Business website development, Custom applications , software solutions, redesign, maintenance and digital projects.";

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

  canonical.setAttribute("href", "https://sijansoft.in/contact");
}, []);
   const isMobile= useMediaQuery({query:'(max-width:768px)'})
   const location = useLocation();
   const currentPath = location.pathname;
       const[headerMenuOpen,setHeaderMenuOpen]=useState(false)
  return (
    <div className='relative'>

       <Header/>   

  
      <section className="bg-black py-24 px-6 md:px-12 min-h-screen">
  <div className="max-w-7xl mx-auto py-10">

    {/* Header */}
    <motion.div
      className="mb-20 max-w-4xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h4 className="text-blue-400 uppercase tracking-[0.2em] text-xs font-bold mb-5">
        GET IN TOUCH
      </h4>

      <h2 className="text-white text-5xl md:text-7xl font-bold leading-[1.05]">
        Let's build something
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          meaningful together.
        </span>
      </h2>

      <p className="text-gray-400 text-lg md:text-xl leading-relaxed mt-8 max-w-2xl">
        Have an idea, a project, or a business challenge?
        We're here to turn it into a digital solution that works.
        Reach out to SijanSoft and let's start a conversation.
      </p>
    </motion.div>


    {/* Contact + Location */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

      {/* LEFT — Contact Details */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col justify-between"
      >

        {/* Address */}
        <div className="mb-14">
          <p className="text-blue-400 uppercase tracking-[0.2em] text-xs font-bold mb-5">
            OUR LOCATION
          </p>

          <h3 className="text-white text-2xl md:text-3xl font-semibold mb-5">
            Visit SijanSoft
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            SijanSoft
            <br />
            Kolkata, West Bengal
            <br />
            India
            <br />
            Serving businesses locally and worldwide.
          </p>
        </div>


        {/* Social / Contact Links */}
        <div>
          <p className="text-blue-400 uppercase tracking-[0.2em] text-xs font-bold mb-6">
            CONNECT WITH US
          </p>

          <div className="flex flex-col">

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@shtechlabs.in"
  target="_blank"
  rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-white/10 py-4 max-w-lg"
            >
              <span className="text-gray-300 group-hover:text-white transition-colors">
                Email
              </span>

              <span className="text-gray-500 group-hover:text-blue-400 transition-colors">
                contact@shtechlabs.in
              </span>
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/shtechlabs"
              className="group flex items-center justify-between border-b border-white/10 py-4 max-w-lg"
            >
              <span className="text-gray-300 group-hover:text-white transition-colors">
                LinkedIn
              </span>

              <span className="text-gray-500 group-hover:text-blue-400 transition-colors">
                Follow us
              </span>
            </a>


            {/* Instagram */}
            <a
              href="https://www.instagram.com/shtechlabs?utm_source=qr&igsi=MTdycDFycTFkMHhlbw=="
              className="group flex items-center justify-between border-b border-white/10 py-4 max-w-lg"
            >
              <span className="text-gray-300 group-hover:text-white transition-colors">
                Instagram
              </span>

              <span className="text-gray-500 group-hover:text-blue-400 transition-colors">
                Follow us
              </span>
            </a>


            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/18KyUVrbTr/"
              className="group flex items-center justify-between border-b border-white/10 py-4 max-w-lg"
            >
              <span className="text-gray-300 group-hover:text-white transition-colors">
                Facebook
              </span>

              <span className="text-gray-500 group-hover:text-blue-400 transition-colors">
                Follow us
              </span>
            </a>


            {/* X */}
            <a
              href="https://x.com/SHTECHLABS"
              className="group flex items-center justify-between border-b border-white/10 py-4 max-w-lg"
            >
              <span className="text-gray-300 group-hover:text-white transition-colors">
                X
              </span>

              <span className="text-gray-500 group-hover:text-blue-400 transition-colors">
                Follow us
              </span>
            </a>

          </div>
        </div>

      </motion.div>


      {/* RIGHT — Location */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="relative min-h-[500px] lg:min-h-[600px] overflow-hidden rounded-2xl border border-white/10"
      >

        {/* Map Image */}
        <img
          src="https://newsmeter.in/h-upload/2022/11/27/500x300_333804-whatsapp-image-2022-11-27-at-35153-pm.webp"
          alt="SijanSoft location"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        {/* Map Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Location Pin */}
        <div className="absolute inset-0 flex items-center justify-center">

          <div className="relative">

            {/* Pulse */}
            <div className="absolute inset-0 w-16 h-16 rounded-full bg-blue-400/20 animate-ping" />

            {/* Pin */}
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 flex items-center justify-center shadow-2xl">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>

          </div>

        </div>


        {/* Location Label */}
        <div className="absolute bottom-6 left-6 right-6">

          <div className="backdrop-blur-xl bg-black/60 border border-white/10 rounded-xl p-5">

            <p className="text-blue-400 text-xs uppercase tracking-[0.2em] font-bold mb-2">
              OUR LOCATION
            </p>

            <h3 className="text-white text-xl font-semibold">
              Kolkata, West Bengal
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              India · Serving clients worldwide
            </p>

          </div>

        </div>

      </motion.div>

    </div>

  </div>
</section>

         <FaQ/>
    <Footer/>
    </div>
  )
}

export default Contact