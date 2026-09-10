import React,{useState,useEffect,useRef} from 'react'
import { PremiumBackground } from './Hero'
import GlowCard from '../components/GlowCard'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import TechStack from './TechStack'
import HorizontalProjects from './HorizontalProjects'
import WhyUs from './WhyUs'

gsap.registerPlugin(ScrollTrigger)
 const expCards=[
  {
    title: "Make An Appointment",
    review:
      "Schedule a quick discovery call with our team to discuss your project requirements, goals, and timeline.",
    imgPath: "/images/appointment.png",
    keypoints: [
      "Book a meeting based on your preferred time slot.",
      "Share your project ideas, requirements, and expectations.",
      "Initial understanding of scope, budget, and timelines."
    ]
  },

  {
    title: "Meet Our Team",
    review:
      "Connect with our designers, developers, and strategists who will help shape and execute your product vision.",
    imgPath: "/images/meet.png",
    keypoints: [
      "Introduction to the dedicated project team.",
      "Discussion about technologies and development approach.",
      "Transparent communication and workflow planning."
    ]
  },

  {
    title: "Get Consultation",
    review:
      "Receive expert guidance on architecture, UI/UX, scalability, and the best technology stack for your business.",
    imgPath: "/images/consultation.png",
    keypoints: [
      "Technical and business requirement analysis.",
      "Suggestions for scalable backend and frontend solutions.",
      "Project roadmap, milestones, and delivery strategy."
    ]
  },

  {
    title: "Start Project",
    review:
      "Once everything is finalized, we begin development using agile methodologies with regular updates and iterations.",
    imgPath: "/images/project.png",
    keypoints: [
      "Agile-based development and sprint planning.",
      "Regular progress updates and feedback cycles.",
      "Testing, deployment, and post-launch support."
    ]
  }
]

const ExperienceSection = () => {

    const [isFixed, setIsFixed] = useState(false)
    const ref2 = useRef(null)
  
    useEffect(() => {
      
      const handleScroll = () => {
        if (!ref2.current) return
  
        const top = ref2.current.getBoundingClientRect().top
  
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
  
    useEffect(() => {
    const interval = setInterval(() => {
      // setIndex((prev) => (prev + 1) % words.length)
    }, 1500)
  
    return () => clearInterval(interval)
  }, [])


  // useGSAP(()=>{
  //   gsap.utils.toArray(".timeline-card").forEach((card)=>{
  //      gsap.from(card,{
  //       xPercent:-100,
  //       opacity:0,
  //       transformOrigin:"left left",
  //       duration:1,
  //       ease:'power2.inOut',
  //       scrollTrigger:{
  //         trigger:card,
  //         start:"top 80%",
  //       }
  //      })
  //   })

  //   gsap.to(".timeline",{
  //     transformOrigin:"bottom bottom",
  //     ease:'power2.inOut',
  //     scrollTrigger:{
  //       trigger:".timeline",
  //       start:"top center",
  //       end:"70% center",
  //       onUpdate:(self)=>{
  //         gsap.to(".timeline",{
  //           scaleY:1-self.progress,
  //         })
  //     }
  //     },
      
  //   })


  //       gsap.utils.toArray(".expText").forEach((text)=>{
  //      gsap.from(text,{
  //       xPercent:0,
  //       opacity:0,
  //       duration:1,
  //       ease:'power2.inOut',
  //       scrollTrigger:{
  //         trigger:text,
  //         start:"top 60%",
  //       }
  //      })
  //   })
   
  // },[])
  
  return (
   <section ref={ref2} style={{ overflow:isFixed?"relative":"hidden",height:"fit-content",
   // background: 'radial-gradient(ellipse 120% 80% at 50% 10%, #07122b 0%, #020812 55%, #000000 100%)',
    background:"black"
  }}
    className='w-full md:pt-20 pt-10 h-[100vh] section-padding xl:px-0 rounded-t-4xl overflow-y-auto no-scrollbar'>
   
   <HorizontalProjects/>
    <div className='w-full h-full md:px-20 px-3'>
        <div className='flex flex-col items-center gap-4'>
      <div className='hero-badge'>
        <p>Our Process For Delivering Results</p>
      </div>
      <div className='font-semibold md:text-5xl text-3xl text-center'>
         <p>HOW WE WORK</p>
      </div>

      <div className='mt-32 relative'>
        <div className='relative z-50 xl:space-y-22 space-y-10'>
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
                  <h1 className='font-semibold text-3xl'>{card.title}</h1>
                  
                  <p className="text-[#839cb5] italic">
                    Key Points
                  </p>
                  <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                    {card.keypoints.map((responsibility)=>(
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

      </div>
       
        
        </div>
        
    </div>

  
   

   </section>
  )
}

export default ExperienceSection