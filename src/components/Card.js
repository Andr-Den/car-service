import React from 'react';

function Card({ src, title, subtitle }) {
  return (
    <div className="w-[650px] text-primary">
      <img src={src} alt="#"/>
      <div className="bg-white p-10 group hover:bg-accent">
        <div className="text-headline4 -tracking-[0.01em]">
          <h3>{title}</h3>
          <p className="text-secondary group-hover:text-white">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;