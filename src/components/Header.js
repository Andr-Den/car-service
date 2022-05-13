import React from 'react';
import Container from './Container';
import DropMenu from './DropMenu';
import Navigation from './Navigation';

import arrow from '../images/arrow.svg';
import burger from '../images/burger.svg';
import close from '../images/close.svg';
import logo from '../images/logo.svg';
import logoSmall from '../images/LogoSmall.svg'

const HeaderItems = [
  'О компании',
  'Гарантии',
  'Новости',
  'Акции',
  'Контакты',
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
          <img src={logo} alt="" className="sm:hidden"/>
          <img src={logoSmall} alt="" className="hidden sm:block"/>
          <div className="relative flex items-center space-x-10 overflow-visible">
            <div className="relative flex space-x-1 peer group lg:hidden">
              <span>Услуги</span>
              <img src={arrow} alt="" className="group-hover:rotate-180"/>
            </div>
            <DropMenu className="absolute border-t -bottom-[251px] border-accent peer-hover:block bg-white z-50 w-screen -left-[680px] hidden"/>
            <ul className="relative flex items-center space-x-10 lg:hidden">
              {HeaderItems.map((name) => (
                <li key={name}>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-5 border-l border-separator lg:flex-row-reverse lg:space-x-0">
              <img src={openMenu ? close : burger} alt="" className="w-8 h-6 ml-5 hover:cursor-pointer lg:mr-2.5" onClick={handleToggleMenu}/>
              <button className="px-5 py-3 rounded-md bg-accent lg:" onClick={onClick}>Запись на сервис</button>
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