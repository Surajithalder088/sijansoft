import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StartProject = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    description: '',
    requiresNda: false,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in the header group from top
      gsap.from(".animate-header", {
        opacity: 0,
        y: -40,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      // Slide in left content items sequentially
      gsap.from(".animate-left-item", {
        opacity: 0,
        x: -40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".left-column-trigger",
          start: "top 75%",
        }
      });

      // Smooth elevate for the premium form card
      gsap.from(".animate-form-card", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".animate-form-card",
          start: "top 85%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section 
      ref={containerRef} 
      className="bg-black text-white min-h-[130vh] py-24 px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center font-sans overflow-x-hidden"
    >
      {/* Top Header Group */}
      <div className="max-w-4xl mx-auto text-center mb-24 space-y-4">
        <h4 className="animate-header text-emerald-400 uppercase tracking-[0.3em] text-xs font-bold">
          LET'S WORK TOGETHER
        </h4>
        <h2 className="animate-header text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Start your next <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
            engineering project
          </span>
        </h2>
        <p className="animate-header text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
          Tell us about your project and we'll get back to you with a tailored proposal within 24 hours.
        </p>
      </div>

      {/* Main Container Divided into Two Distinct Columns */}
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start left-column-trigger">
        
        {/* LEFT COLUMN: Process Steps, Checklist & Socials */}
        <div className="lg:col-span-5 space-y-12">
          
          {/* Step Sequence Block */}
          <div className="space-y-6">
            <h3 className="animate-left-item text-white font-bold text-xl tracking-tight">What happens next</h3>
            <div className="space-y-4">
              {[
                "We review your project details",
                "Schedule a discovery call",
                "Receive a detailed proposal",
                "Kick off your project"
              ].map((step, idx) => (
                <div key={idx} className="animate-left-item flex items-center space-x-4">
                  <div className="w-7 h-7 rounded-full border border-blue-500/30 flex items-center justify-center text-xs text-blue-400 font-bold bg-blue-950/20">
                    {idx + 1}
                  </div>
                  <p className="text-gray-300 text-sm font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Premium "Why Choose Us" Card */}
          <div className="animate-left-item bg-[#0b0f19]/40 border border-gray-800 p-8 rounded-2xl space-y-4 transition-all duration-300 hover:border-blue-500/30">
            <h4 className="text-white font-bold text-md tracking-tight">Why teams choose SoftQare</h4>
            <div className="space-y-3">
              {[
                "Response within 24 hours",
                "Direct access to senior engineers",
                "No account managers, no sales scripts",
                "Free 30-min discovery call included"
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details Footnote */}
          <div className="animate-left-item space-y-3 pt-4 border-t border-gray-900 text-sm text-gray-400">
            <a href="mailto:contact@shtechlabs.in" className="flex items-center space-x-3 hover:text-white transition-colors">
              <span className="text-gray-500">✉</span> <span>contact@shtechlabs.in</span>
            </a>
            <a href="tel:+917477685132" className="flex items-center space-x-3 hover:text-white transition-colors">
              <span className="text-gray-500">📞</span> <span>+91 7477685132</span>
            </a>
            <a href= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKDAEZ2Ydvo9JpK8sABjeBARpbiEbwhy2An3cPaeStQ&s=10'
             className="flex items-center space-x-3">
              <span className="text-gray-500">🌐</span> <span>Facebook</span>
            </a>
          </div>

        </div>

        {/* RIGHT COLUMN: The Brief Intaking Form Box */}
        <div className="animate-form-card lg:col-span-7 bg-[#070a12] border border-gray-800 rounded-2xl p-8 md:p-10 shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Split Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">First Name</label>
                <input 
                  type="text" name="firstName" value={formData.firstName} onChange={handleChange}
                  className="w-full bg-[#111625] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">Last Name</label>
                <input 
                  type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                  className="w-full bg-[#111625] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors" 
                />
              </div>
            </div>

            {/* Work Email */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">Work Email</label>
              <input 
                type="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full bg-[#111625] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors" 
              />
            </div>

            {/* Company Name */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">Company Name</label>
              <input 
                type="text" name="company" value={formData.company} onChange={handleChange}
                className="w-full bg-[#111625] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors" 
              />
            </div>

            {/* Split Selectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">Service Needed</label>
                <select 
                  name="service" value={formData.service} onChange={handleChange}
                  className="w-full bg-[#111625] border border-gray-800 rounded-lg px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-blue-500/50 transition-colors appearance-none"
                >
                  <option value="">Select service</option>
                  <option value="Bussiness Website">Bussiness Website</option>
                  <option value="Fullstack App">Fullstack App(Web/Mobile)</option>
                  <option value="AI-Powered Applications">AI-Powered Applications</option>
                   <option value="SAAS Applications">SAAS Applications</option>
                    <option value="Custom Software">Custom Software</option>
                     <option value="Others">Others</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">Budget Range</label>
                <select 
                  name="budget" value={formData.budget} onChange={handleChange}
                  className="w-full bg-[#111625] border border-gray-800 rounded-lg px-4 py-3 text-sm text-gray-300 focus:outline-none focus:border-blue-500/50 transition-colors appearance-none"
                >
                  <option value="">Select budget</option>
                  <option value="10k-25k">$10k – $25k</option>
                  <option value="25k-50k">$25k – $50k</option>
                  <option value="50k+">$50k+</option>
                </select>
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">Project Description</label>
              <textarea 
                rows="4" name="description" value={formData.description} onChange={handleChange}
                placeholder="Tell us about your project, goals, and timeline..."
                className="w-full bg-[#111625] border border-gray-800 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
              ></textarea>
            </div>

            {/* NDA Checkbox Toggle */}
            <div className="flex items-center space-x-3 py-2">
              <input 
                type="checkbox" id="nda" name="requiresNda" checked={formData.requiresNda} onChange={handleChange}
                className="w-4 h-4 rounded bg-[#111625] border-gray-800 text-blue-500 focus:ring-0 focus:ring-offset-0 cursor-pointer" 
              />
              <label htmlFor="nda" className="text-sm text-gray-300 select-none cursor-pointer">
                This project requires an NDA
              </label>
            </div>

            {/* Deep Blue Call to Action Button */}
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-900/20 transition-all active:scale-[0.99] flex items-center justify-center space-x-2 text-sm"
            >
              <span>💬 Send Project Brief</span>
              <span className="text-xs">↗</span>
            </button>

            {/* Privacy Disclaimer Footnote */}
            <p className="text-center text-[11px] text-gray-600">
              By submitting, you agree to our Privacy Policy. We respond within 24 hours.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
};

export default StartProject;