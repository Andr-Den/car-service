import React from 'react';

import icon from '../images/Icon.svg';

const HeaderItems = [
  'О компании',
  'Гарантии',
  'Новости',
  'Акции',
  'Контакты',
];

function Links() {
  return (
    <div className="flex items-center justify-between lg:mt-10 xs:items-start">
      <ul className="relative flex items-center space-x-5 text-headline4 -tracking-[0.01em] lg:text-mobile4  lg:flex-wrap xs:flex-col  xs:items-start  xs:space-x-0 xs:space-y-5 ">
          {HeaderItems.map((name) => (
            <li key={name} className="span-y-5">
              <span>{name}</span>
            </li>
          ))}
        </ul>
        <a className="flex space-x-2.5 items-center" href="*">
          <p className="text-headline4 lg:text-mobile4">Личный кабинет</p>
          <img src={icon} alt="стрелка" className="h-6"/>
        </a>
  </div>
  );
}

export default Links;
