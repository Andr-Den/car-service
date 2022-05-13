import React from 'react';

import Advantage from './components/Advantage';
import Advice from './components/Advice';
import Comments from './components/Comments';
import Companies from './components/Companies';
import Header from './components/Header';
import Hero from './components/Hero';
import Feedback from './components/Feedback'
import Footer from './components/Footer';
import Map from './components/Map';
import MobApp from './components/MobApp';
import Registration from './components/Registration';
import Services from './components/Services';
import Stocks from './components/Stocks';
import Theses from './components/Theses';

import './App.css'

function App() {
  const [openFeedback, setOpenFeedback] = React.useState(false);
  const [openRegistration, setOpenRegistration] = React.useState(false);

  function handleOpenFeedback() {
    setOpenFeedback(true) 
  }

  function handleCloseFeedback() {
    setOpenFeedback(false) 
  }

  function handleOpenRegistration() {
    setOpenRegistration(true) 
  }

  function handleCloseRegistration() {
    setOpenRegistration(false) 
  }

  return (
    <>
      <Header onClick={handleOpenRegistration}/>
      <Hero />
      <Advantage />
      <Services />
      <Theses />
      <Companies />
      <Stocks />
      <Comments />
      <Map />
      <Advice onClick={handleOpenFeedback}/>
      <MobApp />
      <Footer />
      { openFeedback ? <Feedback onClose={handleCloseFeedback}/> : ''}
      { openRegistration ? <Registration onClose={handleCloseRegistration}/> : ''}
    </>
  );
}

export default App;
