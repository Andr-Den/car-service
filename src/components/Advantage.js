import React from 'react';
import Container from './Container';

function Advantage() {
  return (
    <div className="bg-tertiary py-[180px] text-primary">
      <Container>
        <div className="flex justify-between text-text3 tracking-[0.02em] border-t border-separator_primary">
          <p className="font-bold">ГЛАВНОЕ ПРЕИМУЩЕСТВО КОМПАНИИ</p>
          <p className="text-secondary">#1</p>
        </div>
        <div className="flex justify-between mt-[60px]">
          <p className="text-headline0 -tracking-[0.04em] text-accent">Работаем <br /> с 2012 года</p>
          <div className="text-description -tracking-[0.02em] w-[580px]">
            <p>Вашим автомобилем будут заниматься люди с большим опытом, полученным за многие годы и прошедшие множество обучений.</p>
            <p className="mt-8">Сотрудники обладают огромным багажом знаний, применяемых на практике.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Advantage;