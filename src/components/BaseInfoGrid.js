import React from 'react'
import './style.css';

function BasicInfoGrid(props) {
    const {number, desc,cardFooterText,cardColor,footerIcon,bodyIcon} = props;   
    return (
        <div className="col-lg-3 col-md-6 col-sm-12 p-0 d-flex justify-content-center mb-3" >
        <div className="card border rounded-4 shadow" style={{width:"95%"}}>
            <div className="card-body p-3 d-flex justify-content-between">
                <div className="d-flex flex-column">
                    <span className='fw-bold fs-5 align-text-bottom' style={{color:cardColor}}>{number}</span>
                    <span className='align-text-top' style={{fontSize:"12px",fontWeight:"600"}}>{desc}</span>
                </div>
                <div className='d-flex align-items-center'>
                    {bodyIcon}
                </div>
            </div>
            <div className="card-footer text-white d-flex pb-3 justify-content-between" style={{backgroundColor:cardColor,width:"100%",height:"100%",fontSize:"12px",fontWeight:"600"}}>
                <span>{cardFooterText}</span>
                {footerIcon}
            </div>
        </div>
        </div>
  )
}

export default BasicInfoGrid