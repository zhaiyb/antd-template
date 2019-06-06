import React, { Component } from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

import './index.less';

class ImgSwiper extends Component {
  componentDidMount() {
    const mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      // direction: 'vertical',
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
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
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
        <div className="swiper-pagination" />
        {/* If we need navigation buttons */}
        {/* <div className="swiper-button-prev" />
        <div className="swiper-button-next" /> */}
        {/* If we need scrollbar  */}
        {/* <div className="swiper-scrollbar" /> */}
      </div>
    );
  }
}

export default ImgSwiper;
