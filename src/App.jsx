import React, { useEffect, useState } from 'react'
import Hero, { PremiumBackground } from './sections/Hero'
import AboutSection from './sections/About'
import Services from './sections/Services'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import gsap from "gsap";
import { useMediaQuery } from 'react-responsive'
import Button from './components/Button'
import WhyUs from './sections/WhyUs'
import FaQ from './sections/FaQ'
import StartProject from './sections/StartProject'
import Footer from './sections/Footer'
import { useLocation } from "react-router-dom";





const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isMobile = useMediaQuery({ query: '(max-width:768px)' })

  const [heroModal, setHeroModal] = useState(false)

  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const [headerMenuOpen, setHeaderMenuOpen] = useState(false)



  useEffect(() => {
    // Loading time = 4 sec
    const duration = 4000;
    const intervalTime = 40;

    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      const value = Math.min(
        Math.round((current * intervalTime * 100) / duration),
        100
      );

      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      }
    }, intervalTime);

    // Image scale animation
    gsap.fromTo(
      ".loader-image",
      {
        scale: 0.3,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 4,
        ease: "power3.out",
      }
    );

    return () => clearInterval(interval);
  }, [isMobile]);

  const smoothScrollTo = (targetY, duration = 400) => {
    const startY = window.scrollY
    const distance = targetY - startY
    let startTime = null

    const easeInOutCubic = (t) =>
      t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime

      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)

      const easedProgress = easeInOutCubic(progress)

      window.scrollTo(0, startY + distance * easedProgress)

      if (timeElapsed < duration) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }

  const ModalTab = () => {
    return (
      <div style={{ zIndex: 999999, position: "fixed", bottom: 0 ,width:"100vw",height:"100vh",display:heroModal?"flex":"none",alignItems:"center",justifyContent:"center",padding:isMobile?"8px":"20px",
              background: "rgba(255, 255, 255, 0.08)",
      backdropFilter: "blur(4px)",
      WebkitBackdropFilter: "blur(4px)",
      }}>
        <div 
          className=' p-6 rounded-2xl  flex flex-row items-center justify-center bg-black/90 backdrop-blur-xl w-[70vw] h-fit min-h-[30vh] gap-4'>

          <p onClick={() => setHeroModal(false)}
            className=' absolute p-3 top-3 right-3 cursor-pointer font-bolder text-2xl text-white'
          >X</p>

      

          <div className={`flex flex-col items-center justify-between p-2 ${isMobile?"w-full":"w-[50%]"} `}>
            <p className='text-3xl font-serif p-2'>Ready to Build Your Website?</p>
            <p className='text-xl font-mono p-2'>Get a free consultation and project estimate from SH Tech Lab.

            </p>
            <p className='p-2  text-gray-500'>Whether you need a business website, website redesign, maintenance, SEO optimization, or a custom web application, our team is here to help your business grow online.</p>
            
            <a href='/start-project'
            className='bg-white hover:bg-gray-400 w-full flex justify-center transition text-black font-semibold px-6 py-3 rounded-lg my-4'
            >Book Free Consultation</a>
            <a href='/contact'
             className='  transition font-semibold  w-full flex justify-center px-6 py-3 rounded-lg my-4  border-2 border-white'
            >Contact Us</a>

          </div>


        </div>
      </div>
    )
  }



  return (
    <>{
      isLoading &&
       ( <section
          style={{
            height: "100vh",
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            background: "#000",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex:9999999,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "30px",
              padding: "20px",
            }}
          >
            {/* Image */}
            <div className="loader-image">
              <img
                src='/images/shtl-logo.png'
                alt="logo"

                style={{
                  width: "180px",
                  height: "180px",
                  objectFit: "contain",
                }}
              />
              <span className='text-2xl font-serif italic'>SH TECH LABS</span>
            </div>

            {/* Loading Text */}
            <h1
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
            >
              Loading...
            </h1>

            {/* Progress Bar */}
            <div
              style={{
                width: "100%",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "8px",
                  background: "#222",
                  borderRadius: "999px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    background: "#fff",
                    transition: "width 0.04s linear",
                  }}
                />
              </div>

              {/* Percent */}
              <div
                style={{
                  marginTop: "12px",
                  textAlign: "right",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                {progress}%
              </div>
            </div>
          </div>
        </section>)
      } 
        <div style={{ position: 'relative' }}>



          {/* header */}
          <div className={`
  flex flex-col ${isMobile ? 'py-3' : 'p-1'}
  fixed top-0 w-[100vw] z-90 fit-content 

  backdrop-blur-xl
  bg-gradient-to-b from-black/70 via-black/40 to-transparent

  
`}>
            <div className='flex items-center justify-between w-full '>
              <p className={`flex-1 text-white flex items-center justify-start cursor-pointer ${isMobile ? 'pl-6' : 'pl-15 '}`}
                onClick={() => smoothScrollTo(window.innerHeight * 0)}>
                <img src='/images/shtl-logo.png' className={`${isMobile ? 'size-6' : 'size-12'}`} />
                <span className={`${isMobile ? 'text-md' : 'text-2xl'} font-serif italic`}>SH TECH LABS</span></p>


              {!isMobile ? (
                <div className='flex items-center justify-around gap-2 w-1/2'>
                  <a className="cursor-pointer hover:opacity-70 transition"
                    href='/about'
                  >About</a>
                  <a className="cursor-pointer hover:opacity-70 transition"
                    href='/services'>Services</a>
                  <a className="cursor-pointer hover:opacity-70 transition"
                    href='/projects'>Projects</a>
                  <a className="cursor-pointer hover:opacity-70 transition"
                    href='/contact'>Connect</a>

                  <Button />
                </div>) :
                <div className='flex items-center justify-end gap-2 w-1/2 pr-4'>
                  <Button />
                  <p className="cursor-pointer hover:opacity-70 transition text-white font-semibold p-0"
                    onClick={() => setHeaderMenuOpen(!headerMenuOpen)}>{headerMenuOpen ? 'X' : <img src='/images/main-menu.png' className='size-4' />}</p>
                </div>
              }</div>

            {headerMenuOpen && (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '5px 0px', borderTop: "0.3px solid #262626" }}
                classnamwe='flex items-center justify-around w-[100vw] gap-2  transition-smooth duration-300 ease-in-out '>
                <a style={{ borderBottom: currentPath === '/about' ? '1px solid #262626' : 'none' }}
                  className="cursor-pointer hover:opacity-70 transition text-sm"
                  href='/about'
                >About</a>
                <a className="cursor-pointer hover:opacity-70 transition"
                  href='/services'>Services</a>
                <a
                  className="cursor-pointer hover:opacity-70 transition"
                  href='/projects'>Projects</a>
                <a className="cursor-pointer hover:opacity-70 transition"
                  href='/contact'>Connect</a>



              </div>
            )}


          </div>
          <ModalTab />

         <div onClick={() => setHeroModal(true)}
         className='bg-white rounded-full p-0'
         style={{position:"fixed",bottom:"140px",right:"20px",zIndex:99999,display:heroModal?"none":"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
        
          <img alt="calling"
          src='/images/phone-call.png'
          className='size-10 relative'
          />
         </div>

           <div 
         style={{position:"fixed",bottom:"60px",right:"20px",zIndex:99999,display:heroModal?"none":"flex",alignItems:"center",justifyContent:"center",gap:"10px",cursor:"pointer"}}>
        <a href='https://wa.me/7477685132'><img alt="calling"
          src='/images/whatsapp.png'
          className='size-10 relative'
          /></a> 
         </div>

          {/* content */}
          <Hero />

          <div id='services' className="relative z-10">

            <div className="sticky top-0">
              <div className="h-screen" />
              <Services />
            </div>

          </div>

          <div id='about' className="relative z-15">

            <div className="sticky top-0">
              <AboutSection />
            </div>




          </div>

          <div id='experience' className="relative z-15 bg-black">
            <div className="sticky top-0">
              <ExperienceSection />
              <WhyUs />
              <FaQ />
              <StartProject />
              <Footer />

            </div>
          </div>


        </div>

   </>
  )
}

export default App