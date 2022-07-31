import React from 'react';
import BasicInfo from './BasicInfo';
import GraphChartGrid from './GraphChartGrid';
import OffCanvasSideBar from './OffCanvasSideBar';
import OrderList from './OrderList';
import Sidebar from './Sidebar';
class MainBody extends React.Component {
 
  componentDidMount () {
  
    let ele = document.getElementById('right-bar');
    let ele_height = ele.offsetHeight
    document.getElementById('left-bar').style.height = ele_height+'px';

    
  }
  render() {
  return (
      <div className='row p-0 m-0 w-100'>
        
        <div className='d-none shadow px-3 py-4' id='left-bar' >
          <Sidebar screen='pc' />
        </div>
        <div className='col-12 p-0 mx-auto' id='right-bar'>  
          <BasicInfo />
          <GraphChartGrid />
          <OrderList />
          <OffCanvasSideBar />
        </div>
      </div>
    )
  }
}
  
export default MainBody