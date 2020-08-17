import React from 'react';
import CardContainer from "../../containers/CardContainer";
import initData from '../../data/init-data';

function CardBigBox() {
  const firstRow = initData.row1;
  const secondRow = initData.row2;
  const thirdRow = initData.row3;

  return (
    <>
      <CardContainer cardList={firstRow} />
      <CardContainer cardList={secondRow} />
      <CardContainer cardList={thirdRow} />
    </>
  ); 
}

export default CardBigBox;