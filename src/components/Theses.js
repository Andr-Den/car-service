import React from 'react';
import Container from './Container';

import shield from '../images/shield.svg'
import person from '../images/person.svg'
import cup from '../images/cup.svg'
import car from '../images/car.svg'

const icons =[
  {
    src: shield,
    alt: 'иконка гарантия',
    description: '<p>Гарантия работы<br/>1 год</p>'
  },
  {
    src: person,
    alt: 'иконка сотрудники',
    description: '<p>Квалифицированные<br/>сотрудники</p>'
  },
  {
    src: cup,
    alt: 'иконка зоны ожидания',
    description: '<p>Комфортные<br />зоны ожидания</p>'
  },
  {
    src: car,
    alt: 'иконка оборудование',
    description: '<p>Современное<br/>оборудование</p>'
  },
]

function Theses() {
  return (
    <div className="bg-tertiary pt-[180px] text-primary lg:pt-[120px] xs:pt-[100px]">
      <Container>
        <div className="flex justify-between lg:flex-col lg:space-y-10">
          <div className="max-w-[650px] space-y-10">
            <p className="text-description lg:text-tablet_description xs:text-headline4">
              Обратившись к нам, в автоцентр, вы окажетесь в надёжных руках специалистов 
              послегарантийного ремонта и технического обслуживания автомобилей.
            </p>
            <div className="text-text1 w-[420px] space-y-5 lg:w-[640px] xs:text-sm xs:w-[345px]">
              <p>
                Чтобы автомобиль всегда оставался в отличной форме, необходимо выполнять регулярное ТО по программе рекомендованной производителем.
              </p>
              <p>
                Подразделение нашей компании СЕРТИФИЦИРОВАННО - это позволяет производить обслуживание вашего автомобиля С СОХРАНЕНИЕМ ГАРАНТИИ.
              </p>
            </div>
          </div>
          <ul className='grid grid-cols-2 gap-10 w-[650px] xs:w-[345px]'>
            {icons.map(({ src, alt, description }) => (
              <li>
                <img src={src} alt={alt} />
                <div className="pt-5 lg:text-mobile4 xs:text-sm" dangerouslySetInnerHTML={{ __html: description }} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Theses;
