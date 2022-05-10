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
    <div className="flex justify-between">
    <ul className="relative flex items-center space-x-5 text-headline4 -tracking-[0.01em]">
        {HeaderItems.map((name) => (
          <li key={name}>
            <span>{name}</span>
          </li>
        ))}
      </ul>
      <a className="flex space-x-2.5 items-center" href="*">
        <p className="text-headline4">Личный кабинет</p>
        <img src={icon} alt="стрелка" className="h-6"/>
      </a>
  </div>
  );
}

export default Links;
