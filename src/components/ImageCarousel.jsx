import { useEffect } from 'react';
import '../styles/ImageCarousel.css';
import image0 from '/src/assets/carousel-0.png';
import image1 from '/src/assets/carousel-1.png';
import image2 from '/src/assets/carousel-2.png';
import image3 from '/src/assets/carousel-3.png';
import image4 from '/src/assets/carousel-4.png';

const ImageCarousel = () => {
  const images = [
    image0, image1, image2, image3, image4
  ];

  // Double the images array to create a seamless loop
  const duplicatedImages = [...images, ...images];

  useEffect(() => {
    const scrollContainer = document.querySelector('.carousel-track');
    if (!scrollContainer) return;

    // Reset position when reaching the end
    const handleScroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
    };

    let scrollInterval = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1; // Adjust speed by changing this value
      }
    }, 30); // Adjust interval for smoother/faster scrolling

    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {duplicatedImages.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;