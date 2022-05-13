import React from "react";
import Container from "./Container";

import chevronRight from '../images/chevron-right.svg'

import './Advice.css'

function Advice({ onClick }) {
  return (
    <div className="text-white wrapper">
      <div className="pt-[180px]">
        <Container>
          <p className="text-text3  border-white border-t pt-2.5">ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</p>
          <div className=" w-[650px] float-right mt-[60px]">
            <p className="text-description">
              Оставьте заявку, и наш мастер перезвонит вам,
              произведет предварительную оценку стоимости услуг и запчастей, 
              и подберет удобное время для визита.
            </p>
            <button className="flex px-5 py-3 mt-10 rounded-md bg-accent text-primary" onClick={onClick}>Оставить заявку <img src={chevronRight} alt="" /></button>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Advice
