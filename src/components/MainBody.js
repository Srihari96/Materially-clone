import React from 'react';
import BasicInfo from './BasicInfo';
import GraphChartGrid from './GraphChartGrid';
import OffCanvasSideBar from './OffCanvasSideBar';
import OrderList from './OrderList';

function MainBody() {
  return (
    <>
    <BasicInfo />
    <GraphChartGrid />
    <OrderList />
    <OffCanvasSideBar />
    </>
    )
  }
  
  export default MainBody