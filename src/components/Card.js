import React from 'react';

import chevronRight from '../images/chevron-right.svg'

function Card({ src, title, subtitle }) {
  return (
    <div className="w-[650px] text-primary">
      <img src={src} alt="#"/>
      <div className="bg-white p-10 group hover:bg-accent flex justify-between items-center">
        <div className="text-headline4 -tracking-[0.01em]">
          <h3>{title}</h3>
          <p className="text-secondary group-hover:text-white">{subtitle}</p>
        </div>
        <div className="bg-accent rounded-full w-[40px] h-[40px] flex justify-center items-center group-hover:bg-primary">
          <img src={chevronRight} alt="" className="group-hover:fill-white"/>
        </div>
      </div>
    </div>
  );
}

export default Card;