import styles from './ImageSlider.module.css'; 
import React, { useState } from 'react';
import { SliderData } from './SliderData'; 
import { FaRegHandPointRight, FaRegHandPointLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0); // Initialize state for the current slide index.
  const length = slides.length;
  // Define a function to go to the next slide.
  const nextSlide = () => { 
  // If at end of slides array, go back to the beginning, otherwise go to next slide.
    setCurrent(current === length - 1 ? 0 : current + 1); 
  };
// Define a function to go to the previous slide.
  const prevSlide = () => { 
    // If at beginning of slides array, go to the end, otherwise go to previous slide.
    setCurrent(current === 0 ? length - 1 : current - 1); 
  };
// If the slides array is not an array or has no elements, return null.
  if (!Array.isArray(slides) || slides.length <= 0) { 
    return null;
  }

  return (
    <section className='slider'>
      {/* // Map over the SliderData array to display each slide. */}
      {SliderData.map((slide, index) => { 
        return (
          <div
          // If the slide is the current slide, add the 'active' class.
            className={index === current ? 'slide active' : 'slide'} 
            key={index}
          >
           {/* If the slide is the current slide, display the image. */}
            {index === current && ( 
              <img src={slide.image} alt='slider pic' className={styles['image']} />
            )}
          </div>
        );
      })}
    <div className={styles['arrows-container']}>
    {/* Display the left arrow button and attach the prevSlide function to its onClick event. */}
      <FaRegHandPointLeft className={styles['left-arrow']} onClick={prevSlide} /> 
      {/* Display the right arrow button and attach the nextSlide function to its onClick event. */}
  <FaRegHandPointRight className={styles['right-arrow']} onClick={nextSlide} />  
</div>

    </section>
  );
};

export default ImageSlider;
