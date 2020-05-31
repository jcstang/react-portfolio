import React, { useState } from 'react';
import NavbarComp from './components/NavbarComp';
import CardContainer from './containers/CardContainer';
import Footer from './containers/Footer';
import Header from './components/Header';
import initData from './data/init-data';
import 'bulma/css/bulma.css';
import './App.css';

function App() {

  // using State
  const [ firstRowState ] = useState(initData.row1);
  const [ secondRowState ] = useState(initData.row2);
  const [ thirdRowState ] = useState(initData.row3);

  return (
    <>
      <NavbarComp />
      <Header />
      <CardContainer cardList={firstRowState} />
      <CardContainer cardList={secondRowState} />
      <CardContainer cardList={thirdRowState} />
      <Footer />
    </>
  );
}

export default App;
