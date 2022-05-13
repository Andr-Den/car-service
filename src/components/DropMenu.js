import React from "react";

const services = [
  'Ремонт автомобиля',
  'Плановое ТО',
  'Диагностика и ремонт',
  'Чип тюнинг',
];

function DropMenu({className}) {
  return (
    <div className={className}>
      <ul className="py-10 space-y-4 text-primary text-headline4 pl-[640px]">
      {services.map((name) => (
        <li key={name}>
          <span>{name}</span>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default DropMenu