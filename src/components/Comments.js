import React from 'react';
import Container from './Container';
import CommentsSlider from './CommentsSlider';

function Comments() {
  return (
    <div className="bg-quaternary pt-[180px] pb-[492px] text-white relative">
      <Container>
        <div className="flex justify-between pb-[60px] border-b border-separator_primary">
          <h2 className="text-headline1">Отзывы пользователей<br/>об Автоцентре</h2>
          <div className="flex justify-between w-[420px]">
            <span className="text-headline0 text-accent -tracking-[0.04em]">4.6</span>
            <p className="text-text3 tracking-[0.02em] font-bold text-secondary">СРЕДНЯЯ ОЦЕНКА</p>
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
