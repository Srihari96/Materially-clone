import React from 'react'
import salesgraph from './salesGraph.PNG';
import revenuechart from './revenuechart.PNG';

function GraphChartGrid() {
  return (
    <div className="row py-2 px-4 mx-0">
      <div className="col-lg-4 col-md-12 col-sm-12" >
        <div className='d-flex flex-column align-content-around '>
          <div className="card border rounded-4 shadow" >
            <img src={salesgraph} className="card-img-top" alt="SALES" />
              <div className="card-body d-flex pb-0 justify-content-between px-5" style={{height:"80px"}}>
                <div className='d-flex flex-column align-items-center'>
                  <span className='fw-bold align-text-bottom'>$4230</span>
                  <span className='align-text-top' style={{fontSize:"11px"}}>Total Revenue</span>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <span className='fw-bold align-text-bottom'>321</span>
                  <span className='align-text-top' style={{fontSize:"11px"}}>Today Sales</span>
                </div>
              </div>
          </div>
          <div className='card border rounded-3 shadow mt-3'>
            <div className='card-body d-flex justify-content-between' >
              <span style={{fontSize:"12px"}}>REALTY</span>
              <span className='fw-bold' style={{color:"#ff413a",fontSize:"14px"}}>-0.99</span>
              <span style={{fontSize:"12px"}}>INFRA</span>
              <span className='fw-bold' style={{color:"#00ac69",fontSize:"14px"}}>-7.66</span>
            </div>
          </div>
          </div>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12" >
          <div className="card border rounded-4 shadow" >
            <p className="card-title p-3 fw-bold" style={{fontSize:"12px"}}>Total Revenue</p>
            <hr className='m-0' />
            <img src={revenuechart} className="card-img-top" alt="SALES" />
            <hr className='m-0 m-auto' width="90%"/>

              <div className="card-body d-flex pb-0 justify-content-between px-5" style={{height:"80px"}}>
                <div className='d-flex flex-column align-items-center'>
                  <span className='fw-bold align-text-bottom' style={{fontSize:"12px"}}>Youtube</span>
                  <span className='align-text-top fw-bold' style={{fontSize:"11px",color:"rgb(51, 102, 255)"}}>+ 16.85%</span>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <span className='fw-bold align-text-bottom' style={{fontSize:"12px"}}>Facebook</span>
                  <span className='align-text-top fw-bold' style={{fontSize:"11px",color:"rgb(0, 172, 105)"}}>+45.36%</span>
                </div>
                <div className='d-flex flex-column align-items-center'>
                  <span className='fw-bold align-text-bottom' style={{fontSize:"12px"}}>Twitter</span>
                  <span className='align-text-top fw-bold' style={{fontSize:"11px",color:"rgb(244, 161, 0)"}}>- 50.69%</span>
                </div>
              </div>
          </div>
      </div>
      <div className="col-lg-4 col-md-12 col-sm-12" >
          <div className="card border rounded-4 shadow">
            <p className="card-title p-3 fw-bold" style={{fontSize:"12px"}}>Traffic Sources</p>
            <hr className='m-0' />
            <div className='p-3'>
              <div className=''>
                <div className='d-flex justify-content-between' style={{fontSize:"12px"}}>
                  <span>Direct</span>
                  <span>80%</span>
                </div>
                <div className="progress mt-2" style={{height:"4px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className='mt-4'>
                <div className='d-flex justify-content-between' style={{fontSize:"12px"}}>
                  <span>Social</span>
                  <span>50%</span>
                </div>
                  <div className="progress mt-2" style={{height:"4px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className='mt-4'>

              <div className='d-flex justify-content-between' style={{fontSize:"12px"}}>
                <span>Referral</span>
                <span>20%</span>
              </div>
              <div className="progress mt-2" style={{height:"4px"}}>
                <div className="progress-bar" role="progressbar" style={{width: "20%"}} aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              </div>
              <div className='mt-4'>
                <div className='d-flex justify-content-between' style={{fontSize:"12px"}}>
                  <span>Bounce</span>
                  <span>60%</span>
                </div>
                <div className="progress mt-2" style={{height:"4px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              <div className='mt-4'>
                <div className='d-flex justify-content-between' style={{fontSize:"12px"}}>
                  <span>Internet</span>
                  <span>40%</span>
                </div>
                <div className="progress mt-2" style={{height:"4px"}}>
                  <div className="progress-bar" role="progressbar" style={{width: "40%"}} aria-valuenow="" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
                
            </div>
          </div>
      </div>
    </div>
  )
}

export default GraphChartGrid