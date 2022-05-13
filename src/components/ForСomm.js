import React from 'react';

function ForComm() {
  return (
    <div className="flex flex-col w-60 lg:flex-row lg:justify-between xs:flex-col">
      <div>
        <p className="underline text-headline4 text-accent lg:text-mobile4">info@example.ru</p>
        <p className="w-56 mt-5 text-text1 text-secondary lg:text-sm">Работаем для вас: Ежедневно с 9:00 до 21:00</p>
      </div>
      <div className="lg:justify-between lg:flex lg:space-x-[5px] xs:w-[345px] xs:mt-5">
        <button className="w-56 px-5 py-3 mt-5 rounded-md bg-accent text-primary lg:h-[50px] lg:mt-0 lg:text-mobile2 xs:text-sm xs:w-[153px]">Обратный звонок</button>
        <button className="w-56 px-5 py-3 mt-1 text-white border rounded-md bg-border border-accent lg:h-[50px] lg:mt-0 lg:w-[200px] xs:text-sm xs:w-[170px]">Контроль качества</button>
      </div>
  </div>
  );
}

export default ForComm;
