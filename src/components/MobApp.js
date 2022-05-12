import React from "react";
import Container from "./Container";

import check from '../images/Check.svg'
import mobile from '../images/iPhone13.png'
import google from '../images/google-play-badge.png'
import apple from '../images/app-store-badge.svg'

function MobApp() {
  return (
    <div className="bg-accent text-primary">
      <Container>
        <div className="flex space-x-[207px] items-center">
          <img src={mobile} alt=""/>
          <div>
            <h3 className="text-headline4 -tracking-[0.01em] w-[400px]">Скачивайте наше мобильное приложение</h3>
            <ul className="mt-5">
              <li className="flex font-bold text-text3 tracking-[0.02em]"><img src={check} alt=""/>ЗАПИСАТЬСЯ НА РЕМОНТ</li>
              <li className="flex font-bold text-text3 tracking-[0.02em]"><img src={check} alt=""/>ПРОСМОТРЕТЬ ИСТОРИЮ ОБСЛУЖИВАНИЯ</li>
              <li className="flex font-bold text-text3 tracking-[0.02em]"><img src={check} alt=""/>ПОЛУЧАТЬ ПОСТОЯННЫЕ АКЦИИ И БОНУСЫ</li>
            </ul>
          </div>
          <div className="flex items-center h-[40px]">
            <img src={apple} alt=""/>
            <img src={google} alt="" className="w-[154px]" />
          </div>
       </div>
      </Container>
    </div>
  )
}

export default MobApp