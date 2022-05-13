import React from 'react';
import Container from './Container';
import YouTube from './shared/YouTube';
import VK from './shared/VK';
import Twitter from './shared/Twitter';
import Instagram from './shared/Instagram';

import './Navigation.css'

import icon from '../images/Icon.svg';

const CentersItems = [
  'Автоцентр Volvo',
  'Автоцентр Land Rover',
  'Автоцентр VAG',
  'Автоцентр BMW',
  'Автоцентр Mercedes',
  'Кузовной ремонт и детейлинг'
];

function Navigation() {

  return (
    <div className="absolute z-50 flex w-screen py-10 bg-white border-t border-accent lg:flex-col-reverse">
      <Container>
        <div className="grid grid-cols-2 mt-10">
          <div className="space-y-5">
            <h2 className="text-headline3 text-accent">+7 (999) 123-45-67</h2>
            <p className="underline text-headline4">info@example.ru</p>
            <p className="w-56 text-text1 text-secondary">Работаем для вас: Ежедневно с 9:00 до 21:00</p>
          </div>
          <div className="w-[428px]">
            <p className="pb-5 border-b text-headline4 text-secondary">Автоцентры</p>
            <ul className="relative flex flex-col space-y-2.5 my-5">
                {CentersItems.map((name) => (
                  <li key={name}>
                    <span  className="links">{name}</span>
                  </li>
                ))}
            </ul>
            <a className="flex items-center justify-between pt-5 border-t" href="*">
              <p className="text-headline4">Личный кабинет</p>
              <img src={icon} alt="стрелка" className="h-6"/>
            </a>
          </div>
          <div>
            <p className="text-primary text-3">Адрес автоцентра:</p>
            <p className="text-secondary w-[310px] text-sm">Екатеринбург, ул. Московский тракт 7 км, 2
              +7 (999) 123-45-67</p>
            <p className="text-primary text-3 mt-2.5">Центр кузовного ремонта:</p>
            <p className="text-secondary w-[310px] text-sm">Екатеринбург, ул. Московский тракт 7 км, 2
              +7 (999) 123-45-67</p>
              <div className="flex space-x-2.5 mt-10">
                <a 
                  href="https://vk.com"
                  target="_blank" 
                  rel="noreferrer"
                  className="w-[60px] h-[60px] border rounded-full flex justify-center items-center group hover:bg-primary border-primary"
                >
                  <VK className="stroke-primary group-hover:stroke-white"/>
                </a>
                <a 
                  href="https://instagram.com'" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-[60px] h-[60px] border rounded-full flex justify-center items-center group hover:bg-primary border-primary"
                >
                  <Instagram className="stroke-primary group-hover:stroke-white"/>
                </a>
                <a 
                  href="https://twitter.com"
                  target="_blank" 
                  rel="noreferrer"
                  className="w-[60px] h-[60px] border rounded-full flex justify-center items-center group hover:bg-primary border-primary"
                >
                  <Twitter className="stroke-primary group-hover:stroke-white"/>
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-[60px] h-[60px] border rounded-full flex justify-center items-center group hover:bg-primary border-primary"
                >
                  <YouTube className="stroke-primary group-hover:stroke-white"/>
                </a>
              </div>
          </div>
          <a href='*' className="self-end text-link">Условия конфиденциальности</a>
        </div>
      </Container>
    </div>
  )
}

export default Navigation;
