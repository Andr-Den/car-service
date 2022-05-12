import React from "react";
import Container from "./Container";

import image from '../images/Image1.png'
import chevronRight from '../images/chevron-right.svg'

import './Map.css'

function Map() {
  return (
    <div className="bg-white h-[468px]">
      <Container  className="relative">
        <div className="absolute flex -top-[312px]">
          <div className="text-white bg-quaternary">
            <img src={image} alt="" className="w-[420px] h-[312px]"/>
              <div className="p-10">
                <p>Екатеринбург, Московский тракт 7 км, 2<br/>Телефон: +7 (999) 123-45-67</p>
                <p className="mt-5">
                  Cервис: <span className="text-accent">service@example.ru</span><br/>
                  Отдел запасных частей: <span className="text-accent">parts@example.ru</span>
                </p>
                <button className="flex px-5 py-3 mt-10 rounded-md bg-accent text-primary">Построить маршрут <img src={chevronRight} alt="" /></button>
              </div>
          </div>
          <iframe
            title="Map"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3bd7da24e013a36dd8934e0ac2296304cdbfebc8768f1e16e7294e652fa8d013&amp;source=constructor" 
            width="920" 
            height="600" 
            frameborder="0">
          </iframe>
        </div>
      </Container>
    </div>
  )
}


export default Map;
