import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookAppoinment from './pages/BookAppoinment.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Projects from './pages/Projects.jsx';
import GovRegLink from "./components/GovRegLink.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GovRegLink/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
       <Route path="/services" element={<Services />} />
       <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/start-project" element={<BookAppoinment />} />
    </Routes>
    
    </BrowserRouter>
    
  </StrictMode>,
)
