import React from 'react';
import Container from './Container';

function Advantage() {
  return (
    <div className="bg-tertiary pt-[180px] text-primary lg:pt-[120px] sm:pt-[100px]">
      <Container>
        <div className="flex justify-between text-text3 tracking-[0.02em] border-t border-separator_primary pt-2.5">
          <p className="font-bold">ГЛАВНОЕ ПРЕИМУЩЕСТВО КОМПАНИИ</p>
          <p className="text-secondary">#1</p>
        </div>
        <div className="flex justify-between mt-[60px] lg:flex-col lg:space-y-10">
          <h1 className="text-headline0 -tracking-[0.04em] text-accent lg:text-text0  sm:text-mobile0">Работаем <br /> с 2012 года</h1>
          <div className="text-description -tracking-[0.02em] w-[580px] sm:w-[320px]">
            <p className="text-tablet_description sm:text-headline4">Вашим автомобилем будут заниматься люди с большим опытом, полученным за многие годы и прошедшие множество обучений.</p>
            <p className="mt-8 text-tablet_description sm:text-headline4">Сотрудники обладают огромным багажом знаний, применяемых на практике.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Advantage;
