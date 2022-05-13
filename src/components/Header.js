import React from 'react';
import Container from './Container';
import Navigation from './Navigation';

import arrow from '../images/arrow.svg';
import burger from '../images/burger.svg';
import close from '../images/close.svg';
import logo from '../images/logo.svg';

import './Header.css'

const HeaderItems = [
  'О компании',
  'Гарантии',
  'Новости',
  'Акции',
  'Контакты',
];

const services = [
  'Ремонт автомобиля',
  'Плановое ТО',
  'Диагностика и ремонт',
  'Чип тюнинг',
];

function Header({ onClick }) {
  const [openMenu, setOpenMenu] = React.useState(false);

  function handleToggleMenu() {
    setOpenMenu(!openMenu) 
  }

  return (
    <>
    <header className="py-4">
      <Container>
        <nav className="relative flex items-center justify-between" aria-label="Global">
          <img src={logo} alt=""/>
          <div className="relative flex items-center space-x-10 test">
            <div className="flex space-x-1 group list">
              <span>Услуги</span>
              <img src={arrow} alt="" className="group-hover:rotate-180"/>
              <ul className="pt-10 space-y-4 text-primary text-headline4 popup">
                {services.map((name) => (
                  <li key={name}>
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-line"></div>
            <ul className="relative flex items-center space-x-10">
              {HeaderItems.map((name) => (
                <li key={name}>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-5 border-l border-separator">
              <img src={openMenu ? close : burger} alt="" className="w-8 h-6 ml-5 hover:cursor-pointer" onClick={handleToggleMenu}/>
              <button className="px-5 py-3 rounded-md bg-accent" onClick={onClick}>Запись на сервис</button>
            </div>
          </div>
        </nav>
      </Container>
    </header>
    {openMenu ? <Navigation/> : ''}
    </>
  )
}

export default Header;