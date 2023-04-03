import styles from './ImageSlider.module.css';
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaRegHandPointRight, FaRegHandPointLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='slider pic' className={styles['image']} />
            )}
          </div>
        );
      })}
    <div className={styles['arrows-container']}>
  <FaRegHandPointLeft className={styles['left-arrow']} onClick={prevSlide} />
  <FaRegHandPointRight className={styles['right-arrow']} onClick={nextSlide} />
</div>

    </section>
  );
};

export default ImageSlider;