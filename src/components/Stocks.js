import React from 'react';
import Container from './Container';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import car from '../images/Car.jpg'
import prew from '../images/Prew.jpg'
import arrowRight from '../images/arrow-right.svg'
import arrowLeft from '../images/arrow-left.svg'
import chevronRight from '../images/chevron-right.svg'

const items = [
  {
    src: prew,
    text: `Дарим 1000 бонусов за шиномонтаж и хранение`,
    date: '11 апреля',
  },
  {
    src: car,
    text: `Специальное предложение для владельцев VOLVO XC 90`,
    date: '18 ноября',
  },
]

function Stocks() {
  return (
    <div className="bg-tertiary py-[180px] text-primary">
      <Container>
          <h2 className="text-headline1">Наши акции</h2>
          <Swiper
            className="mt-10"
            modules={[Navigation]}
            loop={true}
            navigation={{
              clickable: true,
              prevEl: '.stocks-prev-button',
              nextEl: '.stocks-next-button',
            }}
          >
              {items.map(({ src, date, text }) => (
                <SwiperSlide key={text}>
                  <div className="flex space-x-10">
                    <img src={src} alt="" className="w-[880px]"/>
                    <div className="relative">
                      <h3 className="text-headline2">{text}</h3>
                      <p className="mt-5 text-text1 text-secondary">{date}</p>
                      <div className="flex items-center mt-10 space-x-2.5">
                        <div className="bg-accent rounded-full w-[40px] h-[40px] flex justify-center items-center hover:bg-primary hover:cursor-pointer">
                          <img src={chevronRight} alt="" className="group-hover:fill-white"/>
                        </div>
                        <p>Подробнее</p>
                      </div>
                      <div className="flex space-x-[5px] absolute bottom-0">
                        <div className="stocks-prev-button border-white border rounded-full w-[40px] h-[40px] flex justify-center items-center hover:cursor-pointer">
                          <img src={arrowLeft} alt="предыдущий слайд"/>
                        </div>
                        <div className="stocks-next-button border border-white rounded-full w-[40px] h-[40px] flex justify-center items-center hover:cursor-pointer">
                          <img src={arrowRight} alt="следующий слайд"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
      </Container>
    </div>
  );
}

export default Stocks;
