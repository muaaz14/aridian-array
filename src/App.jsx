import { useState, useEffect } from 'react'
import './App.css'
import ImageCarousel from './components/ImageCarousel'
import { FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const targetDate = new Date('2025-12-01T00:00:00');
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    
      <div className="main">
        <div className="card">
          <img src="/src/assets/aass-logo.png" className="logo" alt="Logo" />
          <h2>We are Coming Soon</h2>
          <div className="countdown">
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.days}</span>
              <span className="countdown-label">DAYS</span>
            </div>
            <div className="countdown-divider"></div>
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.hours}</span>
              <span className="countdown-label">HOURS</span>
            </div>
            <div className="countdown-divider"></div>
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.minutes}</span>
              <span className="countdown-label">MINS</span>
            </div>
            <div className="countdown-divider"></div>
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.seconds}</span>
              <span className="countdown-label">SECS</span>
            </div>
          </div>
          <div className="social-media">
            <a href="https://www.linkedin.com/company/aridian-array-software-society/" target="_blank" rel="noopener noreferrer" className="icon-container">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://instagram.com/aridianarray" target="_blank" rel="noopener noreferrer" className="icon-container">
              <FaInstagram className="social-icon" />
            </a>
            <a href="https://facebook.com/aridianarray" target="_blank" rel="noopener noreferrer" className="icon-container">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://wa.me/+923255214561" target="_blank" rel="noopener noreferrer" className="icon-container">
              <FaWhatsapp className="social-icon" />
            </a>
          </div>
        </div>
        <div className="carousel-wrapper">
          <ImageCarousel />
        </div>
      </div>
    
  )
}

export default App
