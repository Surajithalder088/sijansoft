import React, { useEffect, useRef } from "react";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Project One",
    desc: "Modern UI/UX design project.",
    video:
      "https://www.w3schools.com/html/mov_bbb.mp4",
       icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Project Two",
    desc: "Animated React website.",
    video:
      "https://www.w3schools.com/html/movie.mp4",
         icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Project Three",
    desc: "Next.js dashboard interface.",
    video:
      "https://www.w3schools.com/html/mov_bbb.mp4",
       icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
    {
    title: "Project Four",
    desc: "Animated React website.",
    video:
      "https://www.w3schools.com/html/movie.mp4",
      icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  
];

const HorizontalProjects = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    // total horizontal movement
    const totalScroll =
      track.scrollWidth - window.innerWidth;

    const tween = gsap.to(track, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: section,

        // section starts animation
        start: "top top",

        // section remains pinned
        pin: true,

        // smooth scrubbing
        scrub: 1,

        // how long scroll continues
        end: () => `+=${totalScroll}`,

        // debugging
        markers: false,
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="horizontal-section" ref={sectionRef}>
      
      <div className="horizontal-track" ref={trackRef}>
        

        {/* Intro Card */}
        <div className="panel intro-panel">
          <h1 className="text-4xl font-bold ">Our Projects</h1>
          <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"    >that deliver
            real business outcomes</h3>
          <p className="pt-5 text-gray-400">
            Explore our creative work, frontend
            interactions, animations, and modern
            UI experiences.
          </p>
        </div>

        {/* Project Cards */}
        {projects.map((project, index) => (
          <div className="panel project-card" key={index}>
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
            />

            <h2 className="text-2xl font-bolder">{project.title}</h2>

            <p>{project.desc}</p>


           <p className="text-2xl mt-2">{project.icon}</p>
          </div>
        ))}

          <div className="panel intro-panel">
          <h1 className="text-4xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400  ">Our All Projects</h1>
          <h3 className="text-4xl font-bold " >Take a look to our works
           </h3>
          <a href="/projects"
          className="font-bolder mt-5 hover:text-cyan-600 cursor-pointer text-xl">View all</a>

          
        </div>
      </div>
    </section>
  );
};

export default HorizontalProjects;