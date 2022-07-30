import React from 'react'
import './style.css';

// function activateSidebarIcon(uid){
//     console.log(111)
//     let sidebarEle = document.getElementsByClassName('sidebar-bttn')
    
//     Array.prototype.forEach.call(sidebarEle, function(ele)  {
//         ele.classList.remove('active-sidebar');
//     });
//     document.getElementById(uid).classList.add('active-sidebar')
//   }
function SideBarIcon(props) {
    const {number,heading,headingIcon,isProElement} = props; 
    let uid = 'side-bar-icon-'+number
    return (
    
    <button  className="border-0 p-0 text-muted w-100 bg-white mt-3 sidebar-bttn" id={uid}  type="button">
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