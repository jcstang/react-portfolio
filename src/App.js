import React, { useState } from "react";
import NavbarComp from "./components/NavbarComp";
import CardContainer from "./containers/CardContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import initData from "./data/init-data";
import TechSection from "./components/TechSection";
import "bulma/css/bulma.css";
import "./App.css";
import CardBigBox from "./components/CardBigBox";

function App() {
  // DO YOU NEED to change titles or screenshots???? go edit ./data/init-data
  const [firstRowState] = useState(initData.row1);
  const [secondRowState] = useState(initData.row2);
  const [thirdRowState] = useState(initData.row3);
  
  const [firstTechRowState] = useState(initData.techRow1);
  const [secondTechRowState] = useState(initData.techRow2);


  return (
    <>
      <NavbarComp />
      <Header />

      <TechSection techList={firstTechRowState} />

      {/* <CardContainer cardList={firstRowState} />
      <CardContainer cardList={secondRowState} />
      <CardContainer cardList={thirdRowState} /> */}
      <CardBigBox />

      <TechSection techList={secondTechRowState} />
      <Footer />
    </>
  );
}

export default App;
