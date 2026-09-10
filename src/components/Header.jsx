import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = () => {
      const isMobile= useMediaQuery({query:'(max-width:768px)'})
    const[headerMenuOpen,setHeaderMenuOpen]=useState(false)
    const location = useLocation();
    const currentPath = location.pathname;
  return (
            <div className={`
  flex flex-col ${isMobile ? 'py-3' : 'p-1'}
  fixed top-0 w-[100vw] z-90 fit-content 

  backdrop-blur-xl
  bg-gradient-to-b from-black/70 via-black/40 to-transparent

  
`}>
      <div className='flex items-center justify-between w-full '> 
         <a className={`flex-1 text-white flex items-center justify-start cursor-pointer ${isMobile ? 'pl-6' : 'pl-15 '}`}
         href='/'>
          <img src='/images/shtl-logo.png'    className={`${isMobile ? 'size-6' : 'size-12'}`}/>
          <span className={`${isMobile ? 'text-md' : 'text-2xl'} font-serif italic`}>SH TECH LABS</span></a>


       {!isMobile ? (
        <div className='flex items-center justify-around gap-2 w-1/2'>
          <a   style={{borderBottom: currentPath === '/about' ? '1px solid grey' : 'none'}} 
           className="cursor-pointer hover:opacity-70 transition"
           href='/about' 
       >About</a>
          <a   style={{borderBottom: currentPath === '/services' ? '1px solid grey' : 'none'}} 
           className="cursor-pointer hover:opacity-70 transition"
           href='/services'>Services</a>

             <a   style={{borderBottom: currentPath === '/projects' ? '1px solid grey' : 'none'}} 
           className="cursor-pointer hover:opacity-70 transition"
           href='/projects'>Projects</a>
          <a  style={{borderBottom: currentPath === '/contact' ? '1px solid grey' : 'none'}} 
            className="cursor-pointer hover:opacity-70 transition"
           href='/contact'>Connect</a>

           <Button />
        </div>):
        <div className='flex items-center justify-end gap-2 w-1/2 pr-4'>
           <Button />
          <p className="cursor-pointer hover:opacity-70 transition text-white font-semibold p-0"
          onClick={() => setHeaderMenuOpen(!headerMenuOpen)}>{headerMenuOpen ? 'X' : <img src='/images/main-menu.png' className='size-4' />}</p>
        </div>
        }</div>

       {headerMenuOpen && (
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',padding:'5px 0px',borderTop:"0.3px solid #262626"}}
        classnamwe='flex items-center justify-around w-[100vw] gap-2  transition-smooth duration-300 ease-in-out '>
          <a  style={{borderBottom: currentPath === '/about' ? '1px solid grey' : 'none'}} 
          className="cursor-pointer hover:opacity-70 transition text-sm"
           href='/about' 
       >About</a>
          <a  style={{borderBottom: currentPath === '/services' ? '1px solid grey' : 'none'}} 
           className="cursor-pointer hover:opacity-70 transition"
           href='/services'>Services</a>

           <a   style={{borderBottom: currentPath === '/projects' ? '1px solid grey' : 'none'}} 
           className="cursor-pointer hover:opacity-70 transition"
           href='/projects'>Projects</a>
          <a   style={{borderBottom: currentPath === '/contact' ? '1px solid grey' : 'none'}} 
           className="cursor-pointer hover:opacity-70 transition"
           href='/contact'>Connect</a>

      
      
        </div>
       )}


      </div>
  )
}

export default Header