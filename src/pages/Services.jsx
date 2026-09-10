import React, { useEffect, useState, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import Button from '../components/Button'

import GlowCard from '../components/GlowCard'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import TechStack from '../sections/TechStack.jsx'
import Footer from '../sections/Footer.jsx'
import WhyUs from '../sections/WhyUs.jsx'
import ExperienceSection from '../sections/ExperienceSection.jsx'
import FaQ from '../sections/FaQ.jsx'
import { useLocation } from "react-router-dom";
import Header from '../components/Header.jsx'




gsap.registerPlugin(ScrollTrigger)

 const expCards=[
  {
    review: "Professional websites that help businesses build a strong online presence, showcase their services, and turn visitors into customers.",
    imgPath: "/images/web-icon.png",
    title: "Business Website Development",
    date: "Next.js  React  TypeScript  Tailwind CSS  Node.js",
    responsibilities: [
        "Build a professional online presence for your business",
        "Showcase your services, products, and business information",
        "Generate customer enquiries, calls, bookings, and leads"
    ]
},
  {
    review: "Custom web and mobile software built around your business processes, helping you automate operations, improve efficiency, and deliver better digital experiences.",
    imgPath: "/images/app-icon.png",
    title: "Custom Mobile & Web Software",
    date: "React  Next.js  React Native  TypeScript  Node.js  FastAPI  PostgreSQL  Firebase",
    responsibilities: [
        "Build custom software tailored to your business needs",
        "Develop web and mobile applications for customers and teams",
        "Automate business processes and improve operational efficiency"
    ]
},
   {
    review: "AI-powered business solutions that automate tasks, enhance customer experiences, and help businesses work smarter and faster.",
    imgPath: "/images/ai-icon.png",
    title: "AI-Powered Applications",
    date: "Python  FastAPI  LangChain  OpenAI  PostgreSQL  React",
    responsibilities: [
        "Build AI solutions tailored to specific business needs",
        "Automate repetitive tasks and improve business workflows",
        "Create intelligent search, assistants, and customer experiences"
    ]
},
{
    review: "Custom management software that brings your business operations, data, and daily workflows together in one centralized platform.",
    imgPath: "/images/saas-icon.png",
    title: "Business Management Software",
    date: "Next.js  React  TypeScript  Node.js  PostgreSQL  Redis  Docker",
    responsibilities: [
        "Admin panels and dashboards for complete business control",
        "Manage customers, staff, orders, inventory, and daily operations",
        "Real-time reports, analytics, and business performance insights"
    ]
},
   
   
]


const Services = () => {
// for seo
  useEffect(() => {
  document.title = "Services | SH TECH LABS";

  const description =
    "Explore SH TECH LABS services including business website development, web applications,AI powered applications,Custom Mobile & Web Software, website redesign, maintenance and digital solutions.";

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

  canonical.setAttribute("href", "https://sijansoft.in/services");
}, []);
    const [isFixed, setIsFixed] = useState(false)
    const ref1 = useRef(null)
    const location = useLocation();
    const currentPath = location.pathname;
    const isMobile= useMediaQuery({query:'(max-width:768px)'})
        const[headerMenuOpen,setHeaderMenuOpen]=useState(false)
   
  useEffect(() => {
    const handleScroll = () => {
      if (!ref1.current) return

      const top = ref1.current.getBoundingClientRect().top

      if (top <= 0) {
        setIsFixed(true)
        console.log(true);
        
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

     useGSAP(()=>{
       gsap.utils.toArray(".timeline-card").forEach((card)=>{
          gsap.from(card,{
           xPercent:-100,
           opacity:0,
           transformOrigin:"left left",
           duration:1,
           ease:'power2.inOut',
           scrollTrigger:{
             trigger:card,
             start:"top 80%",
           }
          })
       })
   
       gsap.to(".timeline",{
         transformOrigin:"bottom bottom",
         ease:'power2.inOut',
         scrollTrigger:{
           trigger:".timeline",
           start:"top center",
           end:"70% center",
           onUpdate:(self)=>{
             gsap.to(".timeline",{
               scaleY:1-self.progress,
             })
         }
         },
         
       })
   
   
           gsap.utils.toArray(".expText").forEach((text)=>{
          gsap.from(text,{
           xPercent:0,
           opacity:0,
           duration:1,
           ease:'power2.inOut',
           scrollTrigger:{
             trigger:text,
             start:"top 60%",
           }
          })
       })
      
     },[])
  
  return (
    <div className='relative'>
          <Header/>
      
         <div className="relative ">
             <video style={{height:isMobile?'60vh':'60vh',objectFit:'cover'}}
          className=" inset-0 w-full  object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={isMobile ? "https://res.cloudinary.com/dbxx49ers/video/upload/v1788252057/service-m_wombzg.mp4" :
           "https://res.cloudinary.com/dbxx49ers/video/upload/v1788252057/service-w_s9kvey.mp4"} 
           type="video/mp4" />
        </video>
         <section
            className='w-full relative md:pt-5 pt-5 min-h-[100vh]  xl:px-0 px-0 overflow-y-auto no-scrollbar bg-black'>
                 <div className={`w-full h-full ${isMobile?'px-6':'p-20'}`}>
                        <div className='flex flex-col items-center gap-4'>
                      
                  <div className='hero-badge'>
                        <p>WHAT WE BUILD</p>
                      </div>
                      <div className='font-semibold md:text-5xl text-3xl text-center'>
                         <p>Enterprise-grade services</p>
                      </div>
                      <div className='font-semibold md:text-5xl text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400'>
                         <p>for modern teams</p>
                      </div>
                      <div style={{width:"100%"}} className='mt-32 relative'>
                      
                        <div style={{width:"100%"}} className='relative z-50 xl:space-y-22 space-y-10'>
                        {expCards.map((card,index)=>
                          <div key={index} className="exp-card-wrapper">
                           <div className='xl:w-2/6 '>
                           <GlowCard card={card} index={index}>
                            <div>
                              <img src={card.imgPath} alt={card.title} />
                            </div>
                
                           </GlowCard>
                            </div>
                            <div className="xl:w-4/6 ">
                            <div className="flex items-start">
                              <div className="timeline-wrapper">
                                <div className="timeline"/>
                                <div className="gradient-line w-1 h-full"/>
                              </div>
                
                              <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                <div className="timeline-logo">
                                   <img src={card.imgPath} alt={card.title} />
                                </div>
                                <div>
                                  <h1 className='font-semibold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400'>{card.title}</h1>
                                 
                                  <p className="text-[#839cb5] italic">
                                    Key Capabilities
                                  </p>
                                  <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                    {card.responsibilities.map((responsibility)=>(
                                      <li key={responsibility} className='text-lg'>{responsibility}</li>
                                    ))}
                                  </ul>
                                </div>
                
                              </div>
                            </div>
                
                            </div>
                           
                            </div>
                        )}
                        </div>
        
                        <div className="h-fit py-14">
                            <TechStack/>
                        </div>
                
                      </div>
                       
                        
                        </div>
                        
                    </div>
            </section>
          </div>
             <ExperienceSection />
            <FaQ/>
    <Footer/>
    </div>
  )
}

export default Services