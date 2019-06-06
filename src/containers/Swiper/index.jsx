import React, { Component } from 'react';
import Swiper from 'swiper';

import './index.less';

class index extends Component {
  componentDidMount() {
    const mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'vertical',
      loop: true,
  
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  }

  render() {
    return (
      // Slider main container
      <div className="swiper-container">
        {/* Additional required wrapper */}
        <div className="swiper-wrapper">
          {/* Slides */}
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>
        {/* If we need pagination */}
        <div className="swiper-pagination"></div>
        {/* If we need navigation buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        {/* If we need scrollbar  */}
        <div className="swiper-scrollbar"></div>
      </div>
    );
  }
}

export default index;