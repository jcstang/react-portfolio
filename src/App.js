import React from 'react';
import './App.css';
import NavbarComp from './components/NavbarComp';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import headshot from './headshot-2.png';
import Media from 'react-bootstrap/Media';
import PortfolioBoard from './containers/PortfolioBoard';
import 'bulma/css/bulma.css';
import CardContainer from './containers/CardContainer';
import Card from './components/Card';
import Footer from './containers/Footer';

function App() {
  return (
    <>
      <NavbarComp />
      <CardContainer />
      <CardContainer />
      <Footer />
    </>
  );
}

export default App;
