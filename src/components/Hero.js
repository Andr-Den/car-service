import React from 'react';
import Container from './Container';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import arrowRight from '../images/arrow-right.svg'
import arrowLeft from '../images/arrow-left.svg'
import image1 from '../images/Image1.png'
import image2 from '../images/Image2.png'
import image3 from '../images/Image3.png'

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
    <div className="text-white pb-[60px] bg-quaternary relative">
      <Container>
        <div className="relative flex space-x-10">
          <div className="pt-20">
            <h2 className="text-headline1">Специализированный <br />Aвтосервис</h2>
            <h2 className="mt-10 text-headline1 text-accent">+7 (999) 123-45-67</h2>
            {items.map(({ title, subtitle }) => (
              <div key={title}>
                <p>{title}</p>
                <p>{subtitle}</p>
              </div>
            ))}
            <button className="px-5 py-3 rounded-md bg-accent text-primary mt-[60px]"><a href="#services">Смотреть услуги &darr;</a></button>
          </div>
          <Swiper
            className="absolute w-[780px] h-full  top-0"
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
                <p className="absolute bottom-[68px] right-[130px] text-headline3">{index}/3</p>
                <div className="flex space-x-[5px] absolute bottom-[60px] left-10">
                  <div className="hero-prev-button bg-accent rounded-full w-[40px] h-[40px] flex justify-center items-center hover:cursor-pointer">
                    <img src={arrowLeft} alt="предыдущий слайд"/>
                  </div>
                  <div className="hero-next-button bg-accent rounded-full w-[40px] h-[40px] flex justify-center items-center hover:cursor-pointer">
                    <img src={arrowRight} alt="следующий слайд"/>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
