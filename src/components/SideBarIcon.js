import React from 'react'

function SideBarIcon(props) {
    const {heading,headingIcon,isPro} = props; 
    let isProElement =''  
    if (isPro){
        isProElement = <span className="badge rounded-pill align-bottom py-1 px-2 d-flex align-items-center sidebar-pro">Pro</span>
    }
    return (
    
    <button  className="border-0 p-0 text-muted w-100 bg-white mt-3" type="button">
        <div className='row p-2 w-100'>
            <div className='col-2 d-flex align-items-center'>
                {headingIcon}
            </div>
            <div className='col-10 px-1  d-flex justify-content-between'>
                <span className='d-flex align-items-center text-black' style={{ fontSize: "15px", fontWeight: "400" }}>{heading}</span>
                {isProElement}
            </div>
        </div>
    </button>
  )
}

export default SideBarIcon