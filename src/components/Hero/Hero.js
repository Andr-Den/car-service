import React from 'react';
import Container from '../Container';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArrowLeft from '../shared/ArrowLeft'
import ArrowRight from '../shared/ArrowRight';

import image1 from '../../images/Image1.png'
import image2 from '../../images/Image2.png'
import image3 from '../../images/Image3.png'

import './Hero.css'

const images = [
  {
    src: image1,
    index: 1,
  },
  {
    src: image2,
    index: 2,
  },
  {
    src: image3,
    index: 3,
  },
]

const items = [
  {
    title: 'Работаем для вас:',
    subtitle: 'Ежедневно с 9:00 до 21:00'
  },
  {
    title: 'По адресу:',
    subtitle: 'Екатеринбург, ул. Московский тракт 7 км, 2'
  },
]

function Hero() {
  return (
    <div className="relative z-10 text-white bg-quaternary pb-[60px] lg:pb-0">
      <Container>
        <div className="relative flex space-x-10">
          <div className="pt-20">
            <h2 className="text-headline1 -tracking-[0.02em] lg:text-tablet1 xs:text-mobile1">Специализированный <br />Aвтосервис</h2>
            <h2 className="mt-10 text-headline1 text-accent -tracking-[0.02em] lg:text-tablet1  xs:text-mobile1">+7 (999) 123-45-67</h2>
            <div  className="space-y-2.5 mt-[60px] lg:mt-10 lg:space-y-3.5">
              {items.map(({ title, subtitle }) => (
                <div key={title}>
                  <p className="text-text1 text-secondary xs:text-sm">{title}</p>
                  <p className="text-text1 xs:text-sm">{subtitle}</p>
                </div>
              ))}
            </div>
            <button className="px-5 py-3 rounded-md bg-accent text-primary mt-[60px] xs:mt-10"><a href="#services">Смотреть услуги &darr;</a></button>
          </div>
        </div>
      </Container>
      <Swiper
            className="slider-wrapper"
            modules={[Navigation]}
            loop={true}
            navigation={{
              clickable: true,
              prevEl: '.hero-prev-button',
              nextEl: '.hero-next-button',
            }}
          >
            {images.map(({ src, index }) => (
              <SwiperSlide key={index}>
                <img src={src} alt="" className="relative"/>
                <p className="absolute bottom-[68px] right-[130px] text-headline3 sm:text-mobile3">{index}/3</p>
                <div className="flex space-x-[5px] absolute bottom-[60px] left-10 ">
                  <div className="hero-prev-button bg-accent rounded-full w-[60px] h-[60px] flex justify-center items-center hover:cursor-pointer hover:bg-white sm:w-[50px] sm:h-[50px]">
                    <ArrowLeft className="stroke-primary"/>
                  </div>
                  <div className="hero-next-button bg-accent rounded-full w-[60px] h-[60px] flex justify-center items-center hover:cursor-pointer  hover:bg-white sm:w-[50px] sm:h-[50px]">
                    <ArrowRight className="stroke-primary"/>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
    </div>
  );
}

export default Hero;
