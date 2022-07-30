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
function SideBarDropdownIcon(props) {
    const {screen,number, dropdownElements,heading,headingIcon,isProElement} = props;   
    const dropdownItems = []
    const uniqueId = 'accordionPanelsStayOpenExample' + number
    const uniqueAriaControl = 'panelsStayOpen-collapse'+ number
    let uid = 'side-bar-icn'+screen+'-'+number
    const dataBsTarget = '#' + uniqueAriaControl
    for (const [index, value] of dropdownElements.entries()) {
        dropdownItems.push(
        <li key={index} className='mt-3'>
            <svg width="15" height="20" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>
            <span className='ms-2' style={{ fontSize: "15px", fontWeight: "400" }}>{value}</span>
        </li>
        )
      }
    
    return (

        <div className="accordion border-0 p-0 bg-white mt-3" id={uniqueId}>
            <div className="accordion-item border-0">
                <button className="accordion-button border-0 bg-white p-0 text-muted collapsed sidebar-bttn" onClick={() => activateSidebarIcon(uid)} id={uid} type="button" data-bs-toggle="collapse"
                    data-bs-target={dataBsTarget} aria-expanded="true"
                    aria-controls={uniqueAriaControl}>
                    <div className='row p-2 bg-white accordion-header w-100' id="panelsStayOpen-headingOne">
                        <div className='col-2 d-flex align-items-center'>
                            {headingIcon}
                        </div>
                        <div className='col-10 px-1  d-flex justify-content-between'>
                            <span className='d-flex align-items-center text-black' style={{ fontSize: "15px", fontWeight: "400" }}>{heading}</span>
                            {isProElement}
                        </div>
                    </div>
                </button>
                <div id={uniqueAriaControl} className="accordion-collapse row px-3 py-1 collapse" aria-labelledby="panelsStayOpen-headingOne" data-bs-parent={uniqueId}>
                    <div className='accordion-body py-0'>
                        <ul className='px-2' style={{ listStyleType: "none" }}>
                            {dropdownItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBarDropdownIcon