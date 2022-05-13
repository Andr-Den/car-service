import Advantage from './components/Advantage';
import Advice from './components/Advice';
import Comments from './components/Comments';
import Companies from './components/Companies';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Map from './components/Map';
import MobApp from './components/MobApp';
import Services from './components/Services';
import Stocks from './components/Stocks';
import Theses from './components/Theses';

import './App.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Advantage />
      <Services />
      <Theses />
      <Companies />
      <Stocks />
      <Comments />
      <Map />
      <Advice />
      <MobApp />
      <Footer />
    </>
  );
}

export default App;
