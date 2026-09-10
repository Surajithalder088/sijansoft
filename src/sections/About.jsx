import React, { useEffect, useState, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


const images = [
  '/images/hand-1.avif',
  '/images/hand-2.jpg',
  '/images/hand-3.jpg',
    '/images/hand-4.png',
  '/images/hand-5.jpg',
  '/images/hand-6.webp',
]

gsap.registerPlugin(ScrollTrigger)
const AboutSection = () => {
  const [isFixed, setIsFixed] = useState(false)
  const ref = useRef(null)
    const [index, setIndex] = useState(0)
    const isMobile= useMediaQuery({query:'(max-width:768px)'})

    const textContainerRef = useRef(null)
const textRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const top = ref.current.getBoundingClientRect().top

      // when touches top
      if (top <= 0) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % images.length)
  }, 1500) // 👈 1 second

  return () => clearInterval(interval)
}, [])

useEffect(() => {
  if (!textRef.current || !textContainerRef.current) return

  const textElement = textRef.current
  const container = textContainerRef.current

  const text = textElement.innerText

  // split words
  const words = text.split(" ")

  // create span for each word
  textElement.innerHTML = words
    .map(
      (word) =>
        `<span class="word">${word}</span>`
    )
    .join(" ")

  const wordSpans =
    textElement.querySelectorAll(".word")

  // initial gray
  gsap.set(wordSpans, {
    color: "#9ca3af",
  })

  const handleScroll = () => {
    const scrollTop = container.scrollTop

    const maxScroll =
      container.scrollHeight -
      container.clientHeight

    const progress = scrollTop / maxScroll

    const wordsToShow = Math.floor(
      progress * wordSpans.length
    )

    wordSpans.forEach((word, index) => {
      if (index <= wordsToShow) {
        gsap.to(word, {
          color: "#000000",
          duration: 0.2,
        })
      } else {
        gsap.to(word, {
          color: "#9ca3af",
          duration: 0.2,
        })
      }
    })
  }

  container.addEventListener(
    "scroll",
    handleScroll
  )

  return () => {
    container.removeEventListener(
      "scroll",
      handleScroll
    )
  }
}, [])

  return (
    <div ref={ref} className="h-screen w-full rounded-t-4xl border-t border-white/20
    shadow-[0_-30px_80px_rgba(255,255,255,0.18),0_-10px_30px_rgba(255,255,255,0.12)]">

      <section id='aboute'
        className={`
          h-screen w-full bg-[#f7d2af] text-black
          rounded-t-4xl
          flex items-center justify-center
          transition-all duration-300
          ${isFixed ? 'fixed top-0 left-0 z-30' : 'relative'}
        `}
      >
        <div className='absolute  w-[350px] left-[10vw] rounded-2xl'>
         
      
    <div className="relative w-[300px] h-[300px] overflow-hidden rounded-2xl ">

  {images.map((img, i) => (
    <img
      key={i}
      src={img}
      className={`
        absolute top-0 left-0
        w-full h-full object-cover
        rounded-2xl 

        transition-opacity duration-700 ease-in-out
        ${i === index ? 'opacity-100' : 'opacity-0'}
      `}
    />
  ))}

</div>

        </div>
        <div ref={textContainerRef} style={{textAlign:"right"}} className={`max-w-4xl  py-16 text-center space-y-6 z-16 ${!isFixed?"overflow-hidden":"overflow-y-scroll"}  h-[100vh] no-scrollbar`}>

          <h2 className={`${isMobile ? 'text-6xl' : 'text-9xl'} font-bold italic px-6 z-18`}>Our Motive</h2>

                          <div
                   
                    className={`
                      ${isMobile ? 'text-xl px-3 pb-12' : 'text-3xl'}
                      font-semibold
                      font-serif
                      pl-[20vw]
                      italic
                      leading-[1.8]
                    `}
                    style={{
                      textAlign: "right",
                    }}
                  >
                    <p ref={textRef}>
                      {`At SH Tech Labs, our motive is to bridge the critical gap between sophisticated technical architecture and tangible business growth. We operate with the firm conviction that software should never be a mere utility; it must be a powerful, competitive asset that drives efficiency, scalability, and long-term value.
                  
                  Our commitment to our clients is rooted in precision and high-impact engineering. By integrating rigorous agile methodologies with a "zero-bug" philosophy, we transform complex operational challenges into streamlined, secure, and intuitive digital ecosystems. We exist to empower visionary enterprises—from high-growth startups to established industry leaders—by providing the technical infrastructure required to dominate their markets.
                  
                  We don't just write code; we architect the future of your operations.`}
                    </p>
                  </div>

          <p className="text-gray-600">
            
          </p>

        </div>
      </section>

    </div>
  )
}

export default AboutSection