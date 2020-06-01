import React from 'react';
import ReactDOM from 'react-dom';
import initData from '../../data/init-data';
import CardContainer from './index';


it('CardContainer renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardContainer cardList={initData.row1} />, div);
});