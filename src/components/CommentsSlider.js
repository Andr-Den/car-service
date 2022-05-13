import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

import ArrowLeft from './shared/ArrowLeft';
import ArrowRight from './shared/ArrowRight';

import rating4 from '../images/Rating4.svg'
import rating5 from '../images/rating5.svg'
import user from '../images/User.jpg'

const items = [
  {
    src: user,
    name: 'butyl1n_i',
    date: '23 декабря 2020',
    rate: rating4,
    text: `Решил убить сразу несколько зайцев, и пока гуляли с женой по меге оставил свою Volvo на диагностику в данном центре.
      Знаю что меняли ранее в другом центре, и что уже нужно было поменять. В этом центре лишнего не насчитали, проблемы нашли.
      В следующий раз приеду уже за полным ТО.`
  },
  {
    src: user,
    name: 'butyl1n_i',
    date: '23 декабря 2020',
    rate: rating5,
    text: `Отличный сервис. Спасибо большое менеджеру Александру, помог и разъяснил (грамотно). 
      Самое главное нашел причину и устранил . Не первый раз обращаюсь и пока всем доволен (обращался 01.06.2018г). 
      Немного о самом сервисе. Клиентская зона на твердую 5 . Есть чай и кофе, и пока делают машину, можно занять себя просмотром телевизора. 
      Сама зона просматривается сквозь стекла . Так что можно всегда посмотреть , на какой стадии ремонт! За это я ставлю 5+.`
  }
]

function CommentsSlider() {
  return (
    <div className="w-[880px] flex">
        <Swiper
          className="mt-10"
          modules={[Navigation]}
          loop={true}
          navigation={{
            clickable: true,
            prevEl: '.comments-prev-button',
            nextEl: '.comments-next-button',
          }}
        >
          {items.map(({ src, name, text, date, rate }) => (
            <SwiperSlide key={text}>
                <div className="relative flex">
                  <img src={src} alt="" className="w-[60px] h-[60px] rounded-full"/>
                  <div className="flex flex-col justify-start pl-4">
                    <p className="text-headline4">{name}</p>
                    <p className="text-sm text-secondary">{date}</p>
                    <img src={rate} alt="" className="absolute h-4 top-[45px]"/>
                  </div>
                </div>
                <div className="flex space-x-[5px] absolute top-0 right-0">
                  <div className="comments-prev-button border-white border bg-quaternary rounded-full w-[60px] h-[60px] 
                      flex justify-center items-center hover:cursor-pointer hover:bg-white group">
                    <ArrowLeft className="stroke-white group-hover:stroke-primary"/>
                  </div>
                  <div className="comments-next-button border bg-quaternary border-white rounded-full w-[60px] h-[60px]
                      flex justify-center items-center hover:cursor-pointer hover:bg-white group">
                    <ArrowRight  className="stroke-white group-hover:stroke-primary"/>
                  </div>
                </div>
                <p className="pt-10 text-justify text-description">{text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
}

export default CommentsSlider;
