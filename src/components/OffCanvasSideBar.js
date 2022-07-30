import React from 'react'
import Sidebar from './Sidebar'

function OffCanvasSideBar() {
    

    return (
        <div className="offcanvas offcanvas-start d-lg-none" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header bg-primary d-flex justify-content-center py-3">
                <img height='35' src='https://lite.codedthemes.com/materially/static/media/logo.07f95c57.svg' alt='Logo' />
            </div>
            <div className="offcanvas-body p-4">
                <Sidebar screen='mob' />
            </div>
        </div>
    )
}

export default OffCanvasSideBar
