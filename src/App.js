import React, { useState } from 'react';
import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';
import Header from './components/Header';
import initData from './data/init-data';
import TechSection from './components/TechSection';
import 'bulma/css/bulma.css';
import './App.css';
import CardBigBox from './components/CardBigBox';

function App() {
  // DO YOU NEED to change titles or screenshots???? go edit ./data/init-data
  const [firstTechRowState] = useState(initData.techRow1);
  const [secondTechRowState] = useState(initData.techRow2);

  return (
    <>
      <NavbarComp />
      <Header />

      <TechSection techList={firstTechRowState} />

      <CardBigBox />

      <TechSection techList={secondTechRowState} />

      <Footer />
    </>
  );
}

export default App;
