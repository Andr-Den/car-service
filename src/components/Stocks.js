import React from 'react';
import Container from './Container';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArrowLeft from './shared/ArrowLeft';
import ArrowRight from './shared/ArrowRight';
import ChevronRight from './shared/ChevronRight';

import chevronRight from '../images/chevron-right.svg'

import car from '../images/Car.jpg'
import prew from '../images/Prew.jpg'

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
    <div className="bg-tertiary py-[180px] text-primary lg:py-[120px] xs:py-[100px]">
      <Container>
        <div className="flex items-center justify-between">
          <h2 className="text-headline1 xs:text-mobile1">Наши акции</h2>
          <button className="flex px-5 py-3 rounded-md bg-accent text-primary">Все акции <img src={chevronRight} alt="" /></button>
        </div>
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
                  <div className="flex space-x-10 lg:flex-col">
                    <img src={src} alt="" className="w-[880px]"/>
                    <div className="relative">
                      <h3 className="text-headline2 lg:mt-10 xs:text-mobile2">{text}</h3>
                      <p className="mt-5 text-text1 text-secondary">{date}</p>
                      <div className="flex items-center mt-10 space-x-2.5">
                        <div className="bg-accent rounded-full w-[40px] h-[40px] flex justify-center items-center hover:bg-primary hover:cursor-pointer group">
                          <ChevronRight className="stroke-black group-hover:stroke-white"/>
                        </div>
                        <p>Подробнее</p>
                      </div>
                      <div className="flex space-x-[5px] absolute bottom-0 lg:-top-[30px] lg:right-0">
                        <div className="stocks-prev-button border-primary border rounded-full w-[60px] h-[60px] flex justify-center items-center hover:cursor-pointer hover:bg-primary group lg:bg-accent lg:border-none">
                          <ArrowLeft className="stroke-primary group-hover:stroke-white"/>
                        </div>
                        <div className="stocks-next-button border border-primary rounded-full w-[60px] h-[60px] flex justify-center items-center hover:cursor-pointer hover:bg-primary group lg:bg-accent lg:border-none">
                          <ArrowRight className="stroke-primary group-hover:stroke-white"/>
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
