import React from 'react'
import './style.css';

function activateSidebarIcon(uid){
    let sidebarEle = document.getElementsByClassName('sidebar-bttn')
    Array.prototype.forEach.call(sidebarEle, function(ele)  {
        try{
            ele.classList.remove('active-sidebar');
        }catch{

        }
    });
    document.getElementById(uid).classList.add('active-sidebar')
  }
function SideBarIcon(props) {
    const {screen,number,heading,headingIcon,isProElement} = props; 
    let uid = 'side-bar-icon-'+screen+'-'+number
    return (
    
    <button  className="border-0 p-0 text-muted w-100 bg-white mt-3 sidebar-bttn" onClick={() => activateSidebarIcon(uid)} id={uid}  type="button">
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