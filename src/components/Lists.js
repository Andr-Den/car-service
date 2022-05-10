import React from 'react';

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
    <div className="flex space-x-10 mt-10">
      <div className="w-[420px]">
        <p className="text-headline4 text-secondary pb-5 border-b -tracking-[0.01em]">Автоцентры</p>
        <ul className="relative flex flex-col space-y-2.5 my-5 text-link">
            {CentersItems.map((name) => (
              <li key={name}>
                <span>{name}</span>
              </li>
            ))}
        </ul>
      </div>
      <div className="w-[420px]">
        <p className="text-headline4 text-secondary pb-5 border-b -tracking-[0.01em]">Услуги</p>
        <ul className="relative flex flex-col space-y-2.5 my-5 text-link">
            {services.map((name) => (
              <li key={name}>
                <span>{name}</span>
              </li>
            ))}
        </ul>
      </div>
  </div>
  );
}

export default Lists;
