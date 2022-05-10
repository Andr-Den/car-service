import React from 'react';
import Container from './Container';

import vk from '../images/VK.svg';
import twitter from '../images/twitter.svg';
import youtube from '../images/youtube.svg';
import instagram from '../images/instagram.svg';
import icon from '../images/Icon.svg';

const socialMedia = [
  {
    src: vk,
    alt: 'логотип вконтакте',
    link: 'https://vk.com'
  },
  {
    src: instagram,
    alt: 'логотип instagram',
    link: 'https://instagram.com'
  },
  {
    src: twitter,
    alt: 'логотип twitter',
    link: 'https://twitter.com'
  },
  {
    src: youtube,
    alt: 'логотип youtube',
    link: 'https://youtube.com'
  }
]

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
    <div className="border-t border-accent h-5/6">
      <Container>
        <div className="grid grid-cols-2 mt-10">
          <div className="space-y-5">
            <h2 className="text-headline3 text-accent">+7 (999) 123-45-67</h2>
            <p className="text-headline4 underline">info@example.ru</p>
            <p className="text-text1 w-56 text-secondary">Работаем для вас: Ежедневно с 9:00 до 21:00</p>
          </div>
          <div className="w-[428px]">
            <p className="text-headline4 text-secondary pb-5 border-b">Автоцентры</p>
            <ul className="relative flex flex-col space-y-2.5 my-5">
                {CentersItems.map((name) => (
                  <li key={name}>
                    <span>{name}</span>
                  </li>
                ))}
            </ul>
            <a className="flex justify-between items-center pt-5 border-t" href="*">
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
                {socialMedia.map(({ src, alt, link }) => (
                  <a href={link} target="_blank" rel="noreferrer" className="border rounded-full w-[60px] h-[60px] border-border flex justify-center items-center hover:bg-border">
                    <img className="w-6 h-6" src={src} alt={alt} key={alt} />
                  </a>
                ))}
              </div>
          </div>
          <a href='*' className="self-end text-link">Условия конфиденциальности</a>
        </div>
      </Container>
    </div>
  )
}

export default Navigation;
