import React from 'react';
import Container from './Container';
import CommentsSlider from './CommentsSlider';

function Comments() {
  return (
    <div className="bg-quaternary pt-[180px] pb-[492px] text-white relative lg:pt-[120px] lg:pb-[120px] xs:pt-[100px]">
      <Container>
        <div className="flex justify-between pb-[60px] border-b border-separator_primary  lg:flex-col lg:pb-10">
          <h2 className="text-headline1 lg:text-tablet1 xs:text-mobile1">Отзывы пользователей<br/>об Автоцентре</h2>
          <div className="flex justify-between w-[420px] lg:w-[214px] lg:self-end lg:space-x-2.5 xs:w-[177px] xs:mt-5">
            <span className="text-headline0 text-accent -tracking-[0.04em] xs:text-mobile0">4.6</span>
            <p className="text-text3 tracking-[0.02em] font-bold text-secondary whitespace-nowrap xs:text-mobile3">СРЕДНЯЯ ОЦЕНКА</p>
          </div>
        </div>
        <div className="relative flex justify-end">
          <CommentsSlider />
        </div>
      </Container>
    </div>
  );
}

export default Comments;
