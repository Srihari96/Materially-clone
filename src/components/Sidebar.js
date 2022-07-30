import React from 'react'
import SideBarDropdownIcon from './SideBarDropdownIcon'
import SideBarIcon from './SideBarIcon'
import './style.css';

const isProElement = <span className="badge rounded-pill align-bottom py-1 px-2 d-flex align-items-center sidebar-pro">Pro</span>

function Sidebar(props) {
    const {screen} = props; 
    return (

        <>
            <div className='d-flex flex-column' style={{ fontSize: "10px" }}>
                <span className='text-uppercase text-primary fw-bold'>Materially</span>
                <span>Dashboard & Widgets</span>
            </div>
            <SideBarIcon screen={screen} number='1' heading='Dashboard' isProElement=''
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"></path></svg></>}
            />
            <SideBarDropdownIcon screen={screen} number="1" isProElement={isProElement}
                dropdownElements={['Static', 'Data', 'Chart']}
                heading='Widget'
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z"></path></svg></>}
            />


            <SideBarIcon screen={screen} number='2' heading='RTL Layout' isProElement=''
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 17h2v.5h-1v1h1v.5h-2v1h3v-4h-3zm1-9h1V4h-2v1h1zm-1 3h1.8L18 13.1v.9h3v-1h-1.8l1.8-2.1V10h-3zM2 5h14v2H2zm0 12h14v2H2zm0-6h14v2H2z"></path></svg></>}
            />

            <div className='d-flex flex-column mt-4' style={{ fontSize: "10px" }}>
                <span className='text-uppercase text-primary fw-bold'>APPLICATION</span>
                <span>Prebuild Application</span>
            </div>

            <SideBarDropdownIcon screen={screen} number="2" isProElement={isProElement}
                dropdownElements={['Account', 'Profile', 'Social Profile', 'Card', 'List']}
                heading='User'
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"></path></svg></>}
            />




            <SideBarDropdownIcon screen={screen} number="3" isProElement={isProElement}
                dropdownElements={['Account', 'Add Product', 'Customers List', 'Order List', 'Order Details', 'Product', 'Product Reviews']}
                heading='E-commerce'
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"></path></svg></>}
            />


            <SideBarDropdownIcon screen={screen} number="4" isProElement={isProElement}
                dropdownElements={['List', 'Card']}
                heading='Contacts'
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"></path></svg></>}
            />

            <SideBarIcon screen={screen} number='3' heading='Mail' isProElement={isProElement}
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V8l6.94 4.34c.65.41 1.47.41 2.12 0L20 8v9c0 .55-.45 1-1 1zm-7-7L4 6h16l-8 5z"></path></svg></>}
            />

            <SideBarIcon screen={screen} number='4' heading='Chat' isProElement={isProElement}
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zM6 12h2v2H6zm0-3h2v2H6zm0-3h2v2H6zm4 6h5v2h-5zm0-3h8v2h-8zm0-3h8v2h-8z"></path></svg></>}
            />

            <div className='d-flex flex-column mt-4' style={{ fontSize: "10px" }}>
                <span className='text-uppercase text-primary fw-bold'>UI ELEMENT</span>
                <span>Material UI Components</span>
            </div>

            <SideBarDropdownIcon screen={screen} number="5" isProElement={isProElement}
                dropdownElements={['Accordion', 'Avatar', 'Badges', 'Breadcrumb', 'Cards', 'Chip', 'List', 'Tabs']}
                heading='Basic'
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 4v2.67l-1 1-1-1V4h2m7 7v2h-2.67l-1-1 1-1H20M6.67 11l1 1-1 1H4v-2h2.67M12 16.33l1 1V20h-2v-2.67l1-1M15 2H9v5.5l3 3 3-3V2zm7 7h-5.5l-3 3 3 3H22V9zM7.5 9H2v6h5.5l3-3-3-3zm4.5 4.5l-3 3V22h6v-5.5l-3-3z"></path></svg></>}
            />

            <SideBarDropdownIcon screen={screen} number="6" isProElement={isProElement}
                dropdownElements={['Alert', 'Dialog', 'Pagination', 'Progress', 'Rating', 'Snackbar', 'Speeddial', 'Timeline', 'Toggle Button', 'Treeview']}
                heading='Advance'
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"></path><circle cx="6.5" cy="6.5" r="1.5"></circle><path d="M8.9 12.55c0 .57.23 1.07.6 1.45l3.5 3.5 3.5-3.5c.37-.37.6-.89.6-1.45 0-1.13-.92-2.05-2.05-2.05-.57 0-1.08.23-1.45.6l-.6.6-.6-.59c-.37-.38-.89-.61-1.45-.61-1.13 0-2.05.92-2.05 2.05z"></path></svg></>}
            />

            <div className='d-flex flex-column mt-4' style={{ fontSize: "10px" }}>
                <span className='text-uppercase text-primary fw-bold'>FORM & TABLES</span>
            </div>

            <SideBarDropdownIcon screen={screen} number="7" isProElement={isProElement}
                dropdownElements={['Autocomplete', 'Button', 'Checkbox', 'Date & Time', 'Listbox', 'Radio', 'Select', 'Slider', 'Switch', 'Text Field']}
                heading='Forms'
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"></path></svg></>}
            />

            <SideBarDropdownIcon screen={screen} number="8" isProElement=''
                dropdownElements={['Basic Table', 'Dense Table', 'Enhanced Tables', 'Data Table', 'Custom Table', 'Fixed Header', 'Collapse Table']}
                heading='Table'
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H5V5h15zm-5 14h-5v-9h5v9zM5 10h3v9H5v-9zm12 9v-9h3v9h-3z"></path></svg></>}
            />

            <SideBarDropdownIcon screen={screen} number="9" isProElement={isProElement}
                dropdownElements={['Simple', 'Column Filters', 'Column Option Update', 'Column Sort', 'Editable', 'CSV Export', 'Custom Action Button', 'Custom Components', 'Customize Columns', 'Customize Filter', 'Draggable Columns', 'Expandable Rows', 'Fixed Header', 'Resizable Columns', 'Selectable Rows']}
                heading='MUI Datatable'
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"></path></svg></>}
            />


            <div className='d-flex flex-column mt-4' style={{ fontSize: "10px" }}>
                <span className='text-uppercase text-primary fw-bold'>PAGES</span>
                <span>Prebuild Pages</span>
            </div>


            <SideBarIcon screen={screen} number='5' heading='Sample Page' isProElement={isProElement}
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM3 19V6h8v13H3zm18 0h-8V6h8v13zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z"></path></svg></>}
            />

            <SideBarIcon screen={screen} number='6' heading='Multi-Language' isProElement=''
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></svg></>}
            />

            <SideBarDropdownIcon screen={screen} number="10" isProElement=''
                dropdownElements={['Login', 'Register', 'Forget Password']}
                heading='Authentication'
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"></path></svg></>}
            />

            <SideBarDropdownIcon screen={screen} number="11" isProElement={isProElement}
                dropdownElements={['Price 1', 'Price 2', 'Price 3']}
                heading='Pricing'
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"></path></svg></>}
            />

            <SideBarDropdownIcon screen={screen} number="12" isProElement={isProElement}
                dropdownElements={['Error 1', 'Error 2']}
                heading='Error'
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1zm-.01-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm1-3h-2v-2h2v2z"></path></svg></>}
            />
            <SideBarIcon screen={screen} number='7' heading='Coming soon' isProElement={isProElement}
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2c-1.1 0-2 .9-2 2v3.17c0 .53.21 1.04.59 1.42L10 12l-3.42 3.42c-.37.38-.58.89-.58 1.42V20c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-3.16c0-.53-.21-1.04-.58-1.41L14 12l3.41-3.4c.38-.38.59-.89.59-1.42V4c0-1.1-.9-2-2-2H8zm8 14.5V19c0 .55-.45 1-1 1H9c-.55 0-1-.45-1-1v-2.5l4-4 4 4zm-4-5l-4-4V5c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v2.5l-4 4z"></path></svg></>}
            />

            <button className="border-0 p-0 text-muted w-100 bg-white mt-3 sidebar-bttn" id={`side-bar-icon-${screen}-8`} type="button">
                <div className='row p-2 w-100'>
                    <div className='col-2 d-flex align-items-center'>
                        <svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></svg></svg>
                    </div>
                    <div className='col-10 px-1  d-flex justify-content-between'>
                        <span className='d-flex align-items-center text-black' style={{ fontSize: "15px", fontWeight: "400" }}>Documentation</span>
                        <span className="badge rounded-pill align-bottom py-1 px-2 d-flex align-items-center bg-primary" style={{ fontWeight: "500" }}>Help?</span>
                    </div>
                </div>
            </button>

            <div className='d-flex flex-column mt-4' style={{ fontSize: "10px" }}>
                <span className='text-uppercase text-primary fw-bold'>Utilities</span>
            </div>

            <SideBarIcon screen={screen} number='9' heading='Modal' isProElement={isProElement}
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14v3H5z"></path></svg></>}
            />
            <SideBarIcon screen={screen} number='10' heading='Tooltip' isProElement={isProElement}
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"></path></svg></>}
            />
            <SideBarIcon screen={screen} number='11' heading='Popover' isProElement={isProElement}
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"></path></svg></>}
            />
            <SideBarIcon screen={screen} number='12' heading='Popper' isProElement={isProElement}
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm8 0h2v2h-2zm-4 0h2v2h-2z"></path></svg></>}
            />
            <SideBarIcon screen={screen} number='13' heading='Transitions' isProElement={isProElement}
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.7 12.4c-.28-.16-.57-.29-.86-.4.29-.11.58-.24.86-.4 1.92-1.11 2.99-3.12 3-5.19-.91-.52-1.95-.8-3.01-.8-1.02 0-2.05.26-2.99.8-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55-.94-.54-1.97-.8-2.99-.8-1.05 0-2.1.28-3.01.8 0 2.07 1.07 4.08 3 5.19.28.16.57.29.86.4-.29.11-.58.24-.86.4-1.92 1.11-2.99 3.12-3 5.19.91.52 1.95.8 3.01.8 1.02 0 2.05-.26 2.99-.8.28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54.94.54 1.97.8 2.99.8 1.05 0 2.1-.28 3.01-.8-.01-2.07-1.08-4.08-3-5.19zm-2.54-3.88c.21-.17.38-.29.54-.37.61-.35 1.3-.54 2-.54.27 0 .53.03.79.08-.31.91-.94 1.69-1.78 2.18-.17.1-.36.18-.58.27l-1.38.52c-.17-.46-.41-.87-.72-1.24l1.13-.9zM12 3.37c.63.72 1 1.66 1 2.63 0 .19-.02.41-.05.63l-.23 1.44C12.48 8.03 12.24 8 12 8s-.48.03-.71.07l-.23-1.44C11.02 6.41 11 6.19 11 6c0-.98.37-1.91 1-2.63zM4.51 7.68c.26-.06.53-.08.8-.08.69 0 1.38.18 1.99.54.15.09.32.2.49.35l1.15.96c-.3.36-.53.76-.7 1.2l-1.38-.52c-.21-.09-.4-.18-.56-.27-.87-.5-1.49-1.27-1.79-2.18zm3.33 7.79c-.21.17-.38.29-.54.37-.61.35-1.3.54-2 .54-.27 0-.53-.03-.79-.08.31-.91.94-1.69 1.78-2.18.17-.1.36-.18.58-.27l1.38-.52c.16.46.41.88.72 1.24l-1.13.9zM12 20.63c-.63-.72-1-1.66-1-2.63 0-.2.02-.41.06-.65l.22-1.42c.23.04.47.07.72.07.24 0 .48-.03.71-.07l.23 1.44c.04.22.06.44.06.63 0 .98-.37 1.91-1 2.63zm6.69-4.24c-.69 0-1.38-.18-1.99-.54-.18-.1-.34-.22-.49-.34l-1.15-.96c.3-.36.54-.76.7-1.21l1.38.52c.22.08.41.17.57.26.85.49 1.47 1.27 1.78 2.18-.27.07-.54.09-.8.09z"></path></svg></>}
            />

            <SideBarIcon screen={screen} number='14' heading='Icons' isProElement=''
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></svg></>}
            />
            <SideBarIcon screen={screen} number='15' heading='Typography' isProElement=''
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path fillOpacity=".36" d="M0 20h24v4H0v-4z"></path><path d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z"></path></svg></>}
            />


            <div className='d-flex flex-column mt-4' style={{ fontSize: "10px" }}>
                <span className='text-uppercase text-primary fw-bold'>SIDEBAR FEATURES</span>
            </div>


            <SideBarDropdownIcon screen={screen} number="13" isProElement={isProElement}
                dropdownElements={['Level 1']}
                heading='Level 0'
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z"></path></svg></>}
            />


            <div className="accordion border-0 p-0 bg-white mt-3  sidebar-bttn" id='accordionPanelsStayOpenExample14'>
                <div className="accordion-item border-0">
                    <button className="accordion-button border-0 bg-white p-0 text-muted collapsed sidebar-bttn" id={`side-bar-icn-${screen}-14`} type="button" data-bs-toggle="collapse"
                        data-bs-target='#panelsStayOpen-collapse14' aria-expanded="true"
                        aria-controls='panelsStayOpen-collapse14'>
                        <div className='row p-2 bg-white accordion-header w-100' id="panelsStayOpen-headingOne">
                            <div className='col-2 d-flex align-items-center'>
                                <svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16zm0-11.47L17.74 9 12 13.47 6.26 9 12 4.53z"></path></svg>
                            </div>
                            <div className='col-10 px-1  d-flex flex-column'>
                                <span className='d-flex align-items-center text-black' style={{ fontSize: "15px", fontWeight: "400" }}>Caption Levels</span>
                                <span className="align-bottom py-1 d-flex align-items-center" style={{ fontSize: "12px" }}>I am Subtitle</span>
                            </div>
                        </div>
                    </button>
                    <div id='panelsStayOpen-collapse14' className="accordion-collapse row px-3 py-1 collapse" aria-labelledby="panelsStayOpen-headingOne" data-bs-parent='accordionPanelsStayOpenExample15'>
                        <div className='accordion-body py-0'>
                            <ul className='px-2' style={{ listStyleType: "none" }}>

                                <li key='1' className='mt-3 d-flex'>
                                    <svg className='' width="15" height="20" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></svg>
                                    <div className='ms-2 d-flex flex-column'>
                                        <span className='' style={{ fontSize: "15px", fontWeight: "400" }}>Level 1</span>
                                        <span className="align-bottom py-1 " style={{ fontSize: "12px" }}>I am Level1 Subtitle</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <SideBarIcon screen={screen} number='16' heading={<><span className='text-muted'>Disabled Menu</span></>} isProElement=''
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  fill='gray' focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></svg></>}
            />


            <SideBarIcon screen={screen} number='17' heading='Oval Chip' isProElement={<><span className="badge rounded-pill text-bg-primary" style={{ fontWeight: "500" }}>9</span></>}
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6m0-2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"></path></svg></>}
            />

            <SideBarIcon screen={screen} number='18' heading='Rounded Chip' isProElement={<><span className="badge rounded-pill text-bg-secondary" style={{ fontWeight: "500" }}>Rounded</span></>}
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.63 7H6.37C3.96 7 2 9.24 2 12s1.96 5 4.37 5h11.26c2.41 0 4.37-2.24 4.37-5s-1.96-5-4.37-5zm0 8H6.37C5.09 15 4 13.63 4 12s1.09-3 2.37-3h11.26C18.91 9 20 10.37 20 12s-1.09 3-2.37 3zM7.24 13.06l-1.87-1.87-.7.7 2.57 2.57 4.22-4.22-.7-.7z"></path></svg></>}
            />
            <SideBarIcon screen={screen} number='19' heading='Avatar Chip' isProElement={<><span className="badge rounded-pill text-bg-primary" style={{ fontWeight: "500" }}>Coded</span></>}
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z"></path></svg></>}
            />
            <SideBarIcon screen={screen} number='20' heading='Outline Chip' isProElement={<><span class="badge rounded-pill text-bg-white text-primary border border-primary" style={{ fontWeight: "500" }}>Outline</span></>}
                headingIcon={<><svg className='sidebar-icon' width='15' height='15'  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z"></path></svg></>}
            />
        </>
    )
}

export default Sidebar