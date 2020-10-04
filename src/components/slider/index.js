import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { SliderMainContainer } from './style';
import ARROW_LEFT_SVG from '../../assets/arrow-left.svg';
import ARROW_RIGHT_SVG from '../../assets/arrow-right.svg';

export const SliderItem = ({ background, title, date, label }) => {
  return (
    <div className="slider-content">
      <img alt={background} src={background} />
      <div className="label">{label}</div>
      <div className="slider-content-children">
        <div className="slider-content-text">{title}</div>
        <div className="slider-content-text">{date}</div>
      </div>
    </div>
  );
};

const Slider = ({ children }) => {
  return (
    <SliderMainContainer arrowLeft={ARROW_LEFT_SVG} arrowRight={ARROW_RIGHT_SVG}>
      <Carousel autoPlay showThumbs={false} showArrows={true} className="slider">
        {children}
      </Carousel>
    </SliderMainContainer>
  );
};

export default Slider;
