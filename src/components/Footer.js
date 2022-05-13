import React from 'react';
import Container from './Container';
import ForComm from './ForСomm';
import Links from './Links';
import Lists from './Lists';
import Media from './Media';

function Footer() {
  return (
    <footer className="bg-quaternary pt-[60px] pb-10 text-white">
      <Container>
        <div className="flex justify-between lg:flex-col">
          <ForComm />
          <div>
            <Links />
            <Lists />
          </div>
        </div>
        <Media />
        <div className="flex justify-between pt-10 text-sm text-separator_primary">
          <p>&copy; 2022 Специализированный автоцентр</p>
          <p>Дизайн и разработка - <a href="https://media-army.ru" className="text-white">Media Army</a></p>
        </div>
      </Container>
    </footer> 
  )
}

export default Footer;
