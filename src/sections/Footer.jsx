import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const isMobile= useMediaQuery({query:'(max-width:768px)'})

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth fade up for the CTA banner elements
      gsap.from(".animate-footer-cta", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        }
      });

      // Subtle link column cascade
      gsap.from(".animate-footer-cols", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".animate-footer-cols",
          start: "top 90%",
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-black text-white pt-20 pb-8 px-6 md:px-12 lg:px-24 border-t border-gray-900 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP ROW: Pre-Footer CTA Banner */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-10 border-b border-gray-900 gap-6">
          <div className="space-y-2">
            <h2 className="animate-footer-cta text-3xl md:text-4xl font-bold tracking-tight">
              Ready to build something great?
            </h2>
            <p className="animate-footer-cta text-gray-400 text-sm md:text-base">
              Let's discuss your next project. We typically respond within 24 hours.
            </p>
          </div>
          
          {/* <div>
            <img src='/images/amar-best-img.jpeg'
           className="animate-footer-cta object-cover mb-4"
            style={{height:isMobile?'100px':'180px',width:isMobile?'100px':'150px',}}
            />
            <p className="text-white font-semibold">Mr. Surajit Halder </p>
            <p className="text-gray-400 text-sm">Founder & CEO</p>
          </div> */}
        </div>

        {/* MIDDLE ROW: Brand Info & Multi-Column Navigation */}
        <div className="animate-footer-cols grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 py-16">
          
          {/* Brand Left Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <p className={`flex-1 text-white flex items-center justify-start cursor-pointer ${isMobile ? 'pl-1' : 'pl-0 '}`}
         onClick={() => smoothScrollTo(window.innerHeight * 0)}>
          <img src='/images/shtl-logo.png'    className={`${isMobile ? 'size-6' : 'size-12'}`}/>
          <span className={`${isMobile ? 'text-md' : 'text-2xl'} font-serif italic`}>SijanSoft</span></p>
             
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Premium software engineering consultancy. We build scalable digital products, SaaS platforms, and AI-powered systems for ambitious teams.
            </p>
               <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@shtechlabs.in"
  target="_blank"
  rel="noopener noreferrer"
              className="group flex items-center justify-start gap-4 border-b border-white/10 py-4 max-w-lg"
            >
              <span className="text-gray-300 group-hover:text-white transition-colors h-6">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTylaM0VeUireMmaKEj03-6ibpFiylCcgQlNUuyKCuaQ&s=10' 
                alt={'ContactEmail'} 
                  className='h-full w-full fit-contain rounded-xl'/>
              </span>

              <span className="text-gray-500 group-hover:text-blue-400 transition-colors">
                contact@shtechlabs.in
              </span>
            </a>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Govt. Reg. No:UDYAM-WB-10-0223251
              </p>

            {/* Social Icons Wrapped in Fine Round Borders */}
            <div className="flex items-center space-x-3 pt-2">
              {[
                { label: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKDAEZ2Ydvo9JpK8sABjeBARpbiEbwhy2An3cPaeStQ&s=10',
                   href: 'https://www.facebook.com/share/18KyUVrbTr/' },
                { label: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxfwaKUG9LpXDzwkL3334GlAOiiBC0cLwLDIVpI38Rg&s=10',
                   href: 'https://www.instagram.com/shtechlabs?utm_source=qr&igsi=MTdycDFycTFkMHhlbw==' },
                { label: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yFIH_CSizLJ31r2OLenaoFYAs7cnUnmoEgxTx621OQ&s=10',
                   href: 'https://www.linkedin.com/company/shtechlabs' },
                { label: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-KQUtAHY0_kl_WL-ZIzsy4jMvBX8SwWlSPhm0p6m1KA&s=10',
                   href: 'https://x.com/SHTECHLABS' },
                { label: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd43NPXZcOp-N1vst9Acu-2IV7ZqJ3zQiOJpoW5YOOyg&s=10', 
                  href: 'https://github.com/shtechlabs' },
                { label: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnAcE2jn33Lqf2fteJ00cS_p19c8dv-nGRQzJWwn7YBg&s=10', 
                  href: 'https://wa.me/7477685132' }
                
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  className="w-9 h-9 rounded-xl border border-slate-600  flex items-center justify-center text-xs text-gray-400 hover:text-white hover:border-gray-700 transition-colors"
                >
                  <span className="flex items-center justify-center ">
                    <img src={social.label} alt={idx} 
                  className='h-full w-full fit-contain rounded-xl'/>
                   </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 1: Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-white">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {["Full Stack Development", "SaaS Development", "AI-Powered Apps", "Cloud & DevOps", "UI/UX Engineering"].map((item, idx) => (
                <li key={idx}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-white">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {["About Us", "Portfolio", "Blog", "Admin Console", "Careers", "Contact"].map((item, idx) => (
                <li key={idx}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 3: Technologies */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-white">Technologies</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {["Next.js & React", "TypeScript", "Node.js & FastAPI", "PostgreSQL & MongoDB", "Docker & AWS"].map((item, idx) => (
                <li key={idx}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM ROW: Copyright & Legal Policies */}
        <div className="pt-8 border-t border-gray-900 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div>
            © 2026 SijanSoft. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;