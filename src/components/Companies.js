import React from "react";
import Container from "./Container";

import volvo from '../images/Volvo.png'
import landRover from '../images/LandRover.png'
import porsche from '../images/Porsche.png'
import skoda from '../images/Skoda.png'
import volkswagen from '../images/Volkswagen.png'
import audi from '../images/Audi.png'
import BMW from '../images/BMW.png'

import './Companies.css'


const logos = [
  {
    src: volvo,
    alt: 'логотип Volvo'
  },
  {
    src: landRover,
    alt: 'логотип LandRover'
  },
  {
    src: porsche,
    alt: 'логотип Porsche'
  },
  {
    src: skoda,
    alt: 'логотип Skoda'
  },
  {
    src: volkswagen,
    alt: 'логотип Volkswagen'
  },
  {
    src: audi,
    alt: 'логотип Audi'
  },
  {
    src: BMW,
    alt: 'логотип BMW'
  },
  {
    src: volvo,
    alt: 'логотип Volvo'
  },
  {
    src: landRover,
    alt: 'логотип LandRover'
  },
  {
    src: porsche,
    alt: 'логотип Porsche'
  },
  {
    src: skoda,
    alt: 'логотип Skoda'
  },
  {
    src: volkswagen,
    alt: 'логотип Volkswagen'
  },
  {
    src: audi,
    alt: 'логотип Audi'
  },
  {
    src: BMW,
    alt: 'логотип BMW'
  },
]

function Companies() {
  return (
    <div className="bg-tertiary pt-[180px] overflow-hidden lg:pt-[120px] xs:pt-10">
      <Container>
        <p className="font-bold text-text3 text-secondary lg:text-text3 tracking-[0.02em]">ОБСЛУЖИВАЕМ И РЕМОНТИРУЕМ</p>
      </Container>
      <div className="relative mt-[60px]">
            <ul className="flex float-left slider">
              {logos.map(({ src, alt }, id) => (
                <div className="border-white border rounded-full w-[300px] h-[300px] flex items-center justify-center -mx-5 lg:w-[230px] lg:h-[230px] xs:w-[190px] xs:h-[190px]" key={id}>
                  <img src={src} alt={alt} className="grayscale"/>
                </div>
              ))}
            </ul>
          </div>
    </div>
  )
}

export default Companies