import React from 'react'
// import Techicons from '../components/Models/Techicons'
import { useMediaQuery } from 'react-responsive'
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const textStackIcone = [
  {
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Node.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "TypeScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Docker",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Redis",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
  {
    name: "React Native",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Three.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  },
];


const TechStack = () => {
const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 7000,
  cssEase: "linear",
  pauseOnHover: true,
  slidesToShow: 4,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};



   const isMobile= useMediaQuery({query:'(max-width:768px)'})
  return (
    <div className="flex-center section-padding bg-black relative">

        <style>{`
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
    100% { transform: translateY(0px); }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  .animate-marquee {
    width: max-content;
    animation: marquee 25s linear infinite;
  }

  .animate-marquee:hover {
    animation-play-state: paused;
  }
`}</style>

        <div className='flex flex-col items-center gap-4 w-[99vw] h-full md:px-10 px-5'>
             <div className='hero-badge'>
        <p>What we bring to the table</p>
      </div>
      <div className='font-semibold md:text-5xl text-3xl text-center'>
         <p>Technologies we use</p>
      </div>

            <div className="w-full overflow-hidden mt-10">
            <div className="flex gap-6 animate-marquee">
              {[...textStackIcone, ...textStackIcone].map((icon, index) => (
                <div
                  key={index}
                  className="card-border tech-card overflow-hidden group md:rounded-full xl:rounded-lg rounded-lg min-w-[280px]"
                >
                  <div className="tech-card-content">
                    <div className="h-20 flex items-center justify-center">
                      <img
                        src={icon.image}
                        alt={icon.name}
                        className="w-14 h-14 object-contain animate-float"
                      />
                    </div>
          
                    <div className="padding-x w-full">
                      <p>{icon.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

    </div>
  )
}

export default TechStack