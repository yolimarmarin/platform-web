import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import SLIDER_BG_PNG from '../../assets/slider-bg.png';
import { SliderMainContainer } from './style';
import ARROW_LEFT_SVG from '../../assets/arrow-left.svg';
import ARROW_RIGHT_SVG from '../../assets/arrow-right.svg';

const Slider = ({ title = 'Youth Talent & Education', date = 'May, 20' }) => {
  return (
    <SliderMainContainer arrowLeft={ARROW_LEFT_SVG} arrowRight={ARROW_RIGHT_SVG}>
      <Carousel autoPlay showThumbs={false} showArrows={true} className="slider">
        <div className="slider-content">
          <img alt={SLIDER_BG_PNG} src={SLIDER_BG_PNG} />
          <div className="label">SCIENCE</div>
          <div className="slider-content-children">
            <div className="slider-content-text">{title}</div>
            <div className="slider-content-text">{date}</div>
          </div>
        </div>
        <div className="slider-content">
          <img alt={SLIDER_BG_PNG} src={SLIDER_BG_PNG} />
          <div className="label">SCIENCE</div>
          <div className="slider-content-children">
            <div className="slider-content-text">{title}</div>
            <div className="slider-content-text">{date}</div>
          </div>
        </div>
      </Carousel>
    </SliderMainContainer>
  );
};

export default Slider;
