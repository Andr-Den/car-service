import React from 'react';

import './Lists.css'

const services = [
  'Ремонт автомобиля',
  'Плановое ТО',
  'Диагностика',
  'Кузовной ремонт и детейлинг',
  'Чип тюнинг',
];

const CentersItems = [
  'Автосервис VOLVO',
  'Автосервис Land Rover',
  'Автосервис VAG',
  'Автосервис BMW',
  'Автосервис Mercedes',
  'Кузовной ремонт и детейлинг'
];


function Lists() {
  return (
    <div className="flex mt-10 space-x-10 xs:flex-col xs:space-x-0">
      <div className="w-[420px]  xs:w-[345px]">
        <p className="text-headline4 text-secondary pb-5 border-b -tracking-[0.01em] xs:w-[345px]">Автоцентры</p>
        <ul className="relative flex flex-col space-y-2.5 my-5 text-link">
            {CentersItems.map((name) => (
              <li key={name}>
                <span className="link">{name}</span>
              </li>
            ))}
        </ul>
      </div>
      <div className="w-[420px]  xs:w-[345px]">
        <p className="text-headline4 text-secondary pb-5 border-b -tracking-[0.01em] xs:w-[345px]">Услуги</p>
        <ul className="relative flex flex-col space-y-2.5 my-5 text-link">
            {services.map((name) => (
              <li key={name}>
                <span className="link">{name}</span>
              </li>
            ))}
        </ul>
      </div>
  </div>
  );
}

export default Lists;
