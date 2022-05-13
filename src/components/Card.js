import React from 'react';

import ChevronRight from './shared/ChevronRight';

function Card({ src, title, subtitle }) {
  return (
    <div className="w-[650px] text-primary lg:w-[310px] xs:w-full">
      <img src={src} alt="#"/>
      <div className="flex items-center justify-between p-10 bg-white group hover:bg-accent lg:p-5">
        <div className="text-headline4 -tracking-[0.01em] lg:text-mobile4">
          <h3>{title}</h3>
          <p className="text-secondary group-hover:text-white">{subtitle}</p>
        </div>
        <div className="bg-accent rounded-full w-[40px] h-[40px] flex justify-center items-center group-hover:bg-primary">
          <ChevronRight  className="stroke-primary group-hover:stroke-white"/>
        </div>
      </div>
    </div>
  );
}

export default Card;