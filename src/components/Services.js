import React from 'react';
import Card from './Card';
import Container from './Container';

import diagnostics from '../images/diagnostics.jpg'
import repare from '../images/repare.jpg'
import TO from '../images/TO.jpg'
import tuning from '../images/tuning.jpg'

const cards =[
  {
    src: diagnostics,
    title: 'Ремонт автомобиля',
    subtitle: '01',
  },
  {
    src: repare,
    title: 'Плановое ТО',
    subtitle: '02',
  },
  {
    src: TO,
    title: 'Диагностика и ремонт',
    subtitle: '03',
  },
  {
    src: tuning,
    title: 'Чип тюнинг',
    subtitle: '04',
  },
]

function Services() {
  return (
    <div className="bg-tertiary pt-[180px] text-primary lg:pt-[120px]" id="services">
      <Container>
        <h2 className="text-headline1 lg:text-mobile1">Услуги автосервиса</h2>
        <ul className='grid grid-cols-2 gap-10 pt-[60px] lg:gap-5 sm:grid-cols-1'>
          {cards.map(({ src, title, subtitle }) => (
            <Card src={src} title={title} subtitle={subtitle} />
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default Services;
