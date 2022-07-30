import React from 'react';
import BasicInfo from './BasicInfo';
import GraphChartGrid from './GraphChartGrid';
import OffCanvasSideBar from './OffCanvasSideBar';
import OrderList from './OrderList';
import Sidebar from './Sidebar';


function MainBody() {
  return (
      <div className='row p-0 m-0 w-100'>
        
        <div className='d-none shadow px-3 py-4' id='left-bar' >
          <Sidebar />
        </div>
        <div className='col-12 p-0' id='right-bar'>  
          <BasicInfo />
          <GraphChartGrid />
          <OrderList />
          <OffCanvasSideBar />
        </div>
      </div>
    )
  }
  
  export default MainBody