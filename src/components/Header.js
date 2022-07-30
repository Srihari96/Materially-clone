import React from 'react';
import './style.css';

const  hideShowSidebar = (e) => {
    let btnelement = document.getElementById("sidebar-btn"); 
    let status = btnelement.getAttribute("bar-status"); 
    if(status==='closed'){
        document.getElementById('left-bar').classList.add('col-2')
        document.getElementById('left-bar').classList.add('d-lg-block')
        document.getElementById('right-bar').classList.add('col-10')
        document.getElementById('right-bar').classList.remove('col-12')
        btnelement.setAttribute("bar-status","open")
    }else{
        document.getElementById('left-bar').classList.remove('col-2')
        document.getElementById('left-bar').classList.remove('d-lg-block')
        document.getElementById('left-bar').classList.add('d-none')
        document.getElementById('right-bar').classList.remove('col-10')
        document.getElementById('right-bar').classList.add('col-12')
        btnelement.setAttribute("bar-status","closed")
    }
  };
function Header() {
    return (
        <div className='container-fluid d-flex shadow-lg justify-content-between bg-primary p-2'>
            <div className='d-flex align-items-center'>
                <div className='pe-5 d-flex align-items-center d-none d-lg-block'>
                    <img src='https://lite.codedthemes.com/materially/static/media/logo.07f95c57.svg' alt='Logo' />
                </div>
                <button className='btn btn-primary text-white p-0 d-none d-lg-block' bar-status='closed' onClick={e =>hideShowSidebar(e)} id='sidebar-btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
                <button className='btn btn-primary text-white p-0 d-lg-none'  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
            </div>
            <div className='d-flex px-3 align-items-center'>
                <div className="input-group me-2 search-bar" style={{height:"30px"}}>
                    <span className="input-group-text border-0 " id="basic-addon1" style={{ color: "rgba(51,102,255,0.1)",backgroundColor:'rgba(255, 255, 255, 0.15)' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </span>
                    <input type="text" style={{ backgroundColor: "rgba(255, 255, 255, 0.15)",caretColor:'white' }} className="form-control border-0 p-1 search-input"  placeholder="Search..." aria-label="Search" aria-describedby="addon-wrapping" />
                </div>
                <div className="d-flex language align-items-center">
                    <svg className="lang-icon d-none d-lg-block" fill="white" focusable="false" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></svg>
                    <select className="form-select bg-primary border border-0 text-white " aria-label="Default select example" defaultValue="en">
                        <option class value="en">English</option>
                        <option value="fr">français</option>
                        <option value="ro">Română</option>
                        <option value="ch">中国人</option>
                    </select>
                </div>
                <div className="d-flex align-items-center">
                    <svg className="MuiSvgIcon-root jss401" fill="white" width="20" height="20" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"></path></svg>
                </div>
                <div className="dropdown">
                    <button className="btn btn-primary border border-0 d-flex align-items-center ms-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg className="alarm-icon" fill="white" width="20" height="20" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5z" opacity=".3"></path><path d="M18 16v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"></path></svg>
                    </button>
                    <ul className="dropdown-menu pt-3 pb-0" style={{ width: "270px" }}>
                        <li className="px-3"><span className="badge rounded-pill text-bg-primary">New</span></li>
                        <li style={{ height: "60px" }} className="mt-2">
                            <a className="dropdown-item h-100 ps-4 pe-1 header-dropdown-item" href="/#">
                                <div className="row h-100">
                                    <div className="col-2 text-center px-0"><img width="30" height="30" style={{ borderRadius: "50%" }} src="https://lite.codedthemes.com/materially/static/media/avatar-1.cbf9c83a.jpg" alt="PIC" /></div>
                                    <div className="col-7 ">
                                        <div className="fw-bold" style={{ fontSize: "12px" }}>John Doe</div>
                                        <small className="mouseover-header" style={{ fontSize: "12px" }}>New Ticket Added</small>
                                    </div>
                                    <div className="col-3 d-flex py-2 px-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" className="bi bi-clock mt-1" viewBox="0 0 16 16">
                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                        </svg>
                                        <div className="text-muted align-text-top ms-2" style={{ fontSize: "11px" }}>now</div>

                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="px-3 mt-1"><button type="button" className="bg-white border border-grey border-2 text-muted rounded-pill"><small>EARLIER</small></button></li>

                        <li style={{ height: "60px" }} className="mt-2">
                            <a className="dropdown-item h-100 ps-4 pe-1 header-dropdown-item" href="/#">
                                <div className="row h-100">
                                    <div className="col-2 text-center px-0"><img width="30" height="30" style={{ borderRadius: "50%" }} src="https://lite.codedthemes.com/materially/static/media/avatar-2.034d02d7.jpg" alt="PIC" /></div>
                                    <div className="col-7">
                                        <div className="fw-bold" style={{ fontSize: "12px" }}>Joseph William</div>
                                        <small className="mouseover-header" style={{ fontSize: "12px" }}>Purchase a new product</small>
                                    </div>
                                    <div className="col-3 d-flex py-2 px-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" className="bi bi-clock mt-1" viewBox="0 0 16 16">
                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                        </svg>
                                        <div className="text-muted align-text-top ms-2" style={{ fontSize: "11px" }}>10 min</div>

                                    </div>
                                </div>
                            </a>
                        </li>
                        <li style={{ height: "60px" }} className="mt-2">
                            <a className="dropdown-item h-100  ps-4 pe-1 header-dropdown-item" href="/#">
                                <div className="row h-100">
                                    <div className="col-2 text-center px-0"><img width="30" height="30" style={{ borderRadius: "50%" }} src="https://lite.codedthemes.com/materially/static/media/avatar-3.7ce49759.jpg" alt="PIC" /></div>
                                    <div className="col-7">
                                        <div className="fw-bold" style={{ fontSize: "12px" }}>Sara Soudein</div>
                                        <small className="mouseover-header" style={{ fontSize: "12px" }}>Currently Login</small>
                                    </div>
                                    <div className="col-3 d-flex py-2 px-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" className="bi bi-clock mt-1" viewBox="0 0 16 16">
                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                        </svg>
                                        <div className="text-muted align-text-top ms-2" style={{ fontSize: "11px" }}>12 min</div>

                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="dropdown">
                    <button className="btn btn-primary border border-0 d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg focusable="false" fill="white" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z" opacity=".3"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"></path></svg>
                    </button>
                    <ul className="dropdown-menu p-0 shadow header-profile-dropdown">
                        <li className="p-0">
                            <a className="dropdown-item h-100 p-3 header-dropdown-item" href="/#">
                                <div className='d-flex align-items-center'>
                                    <svg focusable="false" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.28 8.6l-.7-1.21-1.27.51-1.06.43-.91-.7c-.39-.3-.8-.54-1.23-.71l-1.06-.43-.16-1.13L12.7 4h-1.4l-.19 1.35-.16 1.13-1.06.44c-.41.17-.82.41-1.25.73l-.9.68-1.05-.42-1.27-.52-.7 1.21 1.08.84.89.7-.14 1.13c-.03.3-.05.53-.05.73s.02.43.05.73l.14 1.13-.89.7-1.08.84.7 1.21 1.27-.51 1.06-.43.91.7c.39.3.8.54 1.23.71l1.06.43.16 1.13.19 1.36h1.39l.19-1.35.16-1.13 1.06-.43c.41-.17.82-.41 1.25-.73l.9-.68 1.04.42 1.27.51.7-1.21-1.08-.84-.89-.7.14-1.13c.04-.31.05-.52.05-.73 0-.21-.02-.43-.05-.73l-.14-1.13.89-.7 1.1-.84zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" opacity=".3"></path><path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></svg>
                                    <span className='ms-2 header profile-icon-bar'>Settings</span>
                                </div>
                            </a>
                        </li>
                        <li className="p-0">
                            <a className="dropdown-item h-100 p-3 header-dropdown-item" href="/#">
                                <div className='d-flex align-items-center'>
                                    <svg width="20" height="20" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16c-2.69 0-5.77 1.28-6 2h12c-.2-.71-3.3-2-6-2z" opacity=".3"></path><circle cx="12" cy="8" r="2" opacity=".3"></circle><path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H6zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"></path></svg>
                                    <span className='ms-2 header profile-icon-bar'>Profile</span>
                                </div>
                            </a>
                        </li>
                        <li className="p-0">
                            <a className="dropdown-item h-100 p-3 header-dropdown-item" href="/#">
                                <div className='d-flex align-items-center'>
                                    <svg width="20" height="20" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15.36l-8-5.02V18h16l-.01-7.63z" opacity=".3"></path><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 3.32L19.99 8v.01L12 13 4 8l8-4.68zM4 18v-7.66l8 5.02 7.99-4.99L20 18H4z"></path></svg>
                                    <span className='ms-2 header profile-icon-bar'>My Messages</span>
                                </div>
                            </a>
                        </li>
                        <li className="p-0">
                            <a className="dropdown-item h-100 p-3 header-dropdown-item" href="/#">
                                <div className='d-flex align-items-center'>
                                    <svg width="20" height="20" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" opacity=".3"></path><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></svg>
                                    <span className='ms-2 header profile-icon-bar'>Lock Screen</span>
                                </div>
                            </a>
                        </li>
                        <li className="p-0">
                            <a className="dropdown-item h-100 p-3 header-dropdown-item" href="/#">
                                <div className='d-flex align-items-center'>
                                    <svg width="20" height="20" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 19h6V5H7v14zm3-8h2v2h-2v-2z" opacity=".3"></path><path d="M19 19V4h-4V3H5v16H3v2h12V6h2v15h4v-2h-2zm-6 0H7V5h6v14zm-3-8h2v2h-2z"></path></svg>
                                    <span className='ms-2 header profile-icon-bar'>Logout</span>
                                </div>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        
    )
}

export default Header