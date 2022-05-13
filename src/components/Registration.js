import React from "react";

import close from '../images/close.svg'
import chevronRight from '../images/chevron-right.svg'

function Registration({ onClose }) {
  return (
    <div className="fixed top-0 left-0 z-50 flex justify-end w-full h-full bg-primary text-primary">
      <div className="w-full h-full max-w-[800px] bg-white opacity-100 px-[60px] pt-[100px] relative lg:px-[52px]">
        <button className="bg-accent w-[100px] h-[100px] flex items-center justify-center absolute top-0 -left-[100px] lg:left-[650px]" onClick={onClose}><img src={close} alt="" /></button>
        <h4 className="text-headline3">Перезвоним в течении часа</h4>
        <form>
          <fieldset className="flex flex-col w-[680px] space-y-5 mt-10">
            <input type="text" placeholder="Ваше имя *" className="border rounded-lg border-secondary py-2.5 px-7 h-[60px] placeholder:text-primary"/>
            <input type="tel" placeholder="Контактный телефон *" pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" className="border rounded-lg border-secondary py-2.5 px-7 h-[60px] placeholder:text-primary"/>
            <select className="border rounded-lg border-secondary py-2.5 px-7 h-[60px] placeholder:text-primary">
              <option>Марка автомобиля *</option>
              <option>Volvo</option>
              <option>BMW</option>
              <option>Audi</option>
              <option>Volkswagen</option>
              <option>Skoda</option>
              <option>Другое</option>
            </select>
            <input type="text" placeholder="Краткое описание проблемы" className="border flex rounded-lg border-secondary px-7 py-2.5 h-[180px] placeholder:text-primary" />
            <div className="flex items-center justify-between mt-10">
              <p className="text-sm text-secondary">Нажимая кнопку «Отправить заявку» вы даете<br/>согласие на <a href="#" className="text-primary">Обработку персональных данных</a></p>
              <button className="flex justify-center py-7 rounded-md bg-accent text-primary w-[310px]">Оставить заявку <img src={chevronRight} alt="" /></button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Registration