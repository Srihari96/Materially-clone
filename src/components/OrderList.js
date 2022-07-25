import React from 'react'

function OrderList() {
  return (
    <div className="mt-4 py-2 px-4">
        <div className='shadow rounded-3'>

        <div className='fw-bold p-3'  style={{fontSize:"12px"}}>Latest Order</div>
       <div className='table-responsive'>
       <table className="table align-middle ">
            <thead>
                <tr style={{fontSize:"12px",backgroundColor:"#e5e5e5"}}>
                <th className='px-4 py-3' scope="col">Customer</th>
                <th className='py-3' scope="col">Order Id</th>
                <th className='py-3' scope="col">Photo</th>
                <th className='py-3' scope="col">Product</th>
                <th className='py-3' scope="col">Quantity</th>
                <th className='py-3' scope="col">Date</th>
                <th className='py-3' scope="col">Status</th>
                <th className='py-3' scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr style={{fontSize:"12px"}}>
                <td className='px-4'>John Deo</td>
                <td>#81412314</td>
                <td><img alt='' height="33" src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/2wBDAQUFBQcGBw0HBw0cEhASHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wgARCAAoABQDAREAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAACAQFBgf/xAAZAQADAQEBAAAAAAAAAAAAAAACAwQFAQD/2gAMAwEAAhADEAAAAOLsDGsBmLMW6GZLR1U5ekR54JqhVgaI9kRJxTHoqKy2axwXd4//xAAyEAABAwIEBAMFCQAAAAAAAAACAQMFBAYABxESCBMUMiExYRVBUYG0IjM1RVVxdLGz/9oACAEBAAE/AL4zQuqXvGf6ufnXtkjUiAJWuC2Ao6SIIihaCOAvSZBG1akptok7i65xFVfkWOFW+56Uy6kevkX6zpZV1lk61zeYhymT03FqqpuMsVzDTt0zrjp6N+0awj089ouuKunyTDx05OErLLrIonY4aH4IqIuhJ79V/b4Y4V3yWxZvZv8Axg+z+OxiWkjYvCe0825Gq9U++PEhU9RRvpTMtsuMfbUWh05gJ4qCqvp4onxxwiOdVl5Nub/zpz6djFzVvIvS5E17ZOq/2PDEurVSR44P9gZeT+z9dd+np8Zj5c3TB33cjEhATLBrIVJISUbhAYq4SoQkg6EOCtGc5mjcTKuH7kGjdL+hxwc5dXNRZWyLldEVdF1cw88ylYCsmbfKZDegl6gWP//EACIRAAIBAwIHAAAAAAAAAAAAAAIDAAESEwQREBQjQVFhcf/aAAgBAgEBPwAUkU5RkYsllaUBwrWPmaZ+QrZrCyurUfkE4h+O63vNX0zoPqkrTgxmStxTabTaf//EAB8RAAICAwACAwAAAAAAAAAAAAACAQMREiIEMRMhMv/aAAgBAwEBPwCbFU+dRWVoyeQ7NYyqYZV2Kdakw3ufsvTphJ6Xb0VbNEyWITXyU/gmDQXmMH//2Q=='/></td>
                <td>Moto G5</td>
                <td>10</td>
                <td>17-2-2017</td>
                <td><span className="badge rounded-pill text-bg-secondary" style={{fontWeight:"400",fontSize:"12px"}}>Pending</span></td>
                <td className='d-flex'>
                    <button className="btn btn-white border border-0 rounded-circle edit-btn" type="button"><svg fill="#36f" focusable="false" height="17" width="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"></path></svg></button>
                    <button className="btn btn-white border border-0 rounded-circle del-btn" type="button"><svg focusable="false" height="17" width="17"  viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"></path></svg></button>
                </td>
                </tr>
                
                <tr style={{fontSize:"12px"}}>
                <td className='px-4'>Jenny William</td>
                <td>#68457898</td>
                <td><img alt='' height="33" src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/2wBDAQUFBQcGBw0HBw0cEhASHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wgARCAAoABQDAREAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAABgcIBAX/xAAZAQACAwEAAAAAAAAAAAAAAAAFBgMEBwL/2gAMAwEAAhADEAAAAJxa1znPY1Pbg7Rant55gyE9zUVK2k6HIqIGlA8gv+5FLFyQiyQDTy+/wVnF/wD/xAAsEAABAwMDAgQGAwAAAAAAAAABAgMEBQYRAAcSEzEUISMyFSIkQVFTYXGi/9oACAEBAAE/AKBYtqXBEtlNeqsNDU59fjkLZ+eIB2Wpecnlq9dqttKHFqkqBV23HYswIiIQg/UNfnGrqegwq5Jaokp1+BhOHDhBJ4jOeASD/eNW5b1yVCybATFt6lSIr8zqRVPkFUtQJOHB9k6vaQ5Fuxe3a7cpxuyZUkTErCBwZP6Eq/VreDbettXzNdrtMgUWfIQh0waMPpW04wOGqHFqjUCjOz11JihoOUuh3gwjJ8ume6VZ7nTtoGcIEt6HEc9JKjLbWlTxGPsvuVfzrcWOYtZiNBK8CIjHjFdR33L9ytWZZrt77XW3SJ5QinMtIUh1CPV7kjv5HVVsugWrPpVUimX46nRjDY5vHplB8ySgHHLW6NWbXcLGFe2Kgf6Vrba748OxYMaOIb6YcBJQVTmmy+92LWCrKSD+QNXte9sz5cIVG4YkCSVJS5ERJQsNg91FQVg41vBU6DEvFbFArvxaC3HbBkMesAvzynknI1//xAApEQACAQMCBAUFAAAAAAAAAAACAwEABBESMQUTIUEUIiNRYUJScoHB/9oACAECAQE/ALXh6RRzNUydWayJi9NsMhp6lnrBdoxTF+JgW3i4A5jrH7mn3SEtYoSmTEYyMfPt2rhF6mbflmRDJDPT+/lQ3aUrAFlJxjed95q6uLZb1jc5iO+KB6BWzwhTr+jNIK5IM32NdcQSbHDp2ijfyfLSfUDVROJt7yW+Vf31elBXJLUzMQWI6bx71aOWhUL3+a//xAAtEQABAwICCQIHAAAAAAAAAAACAQMEABEFURITFCEiMUJSYTIzBhUjQXGBwf/aAAgBAwEBPwAXZL5OQnMNQmGmxUC7ltWNRnIMkmHzUHFX0dor5oENu4xyuNNJCcWS8UtxFJsUVOkbJzGvia44g1LZLTbGyXL1LTz77jpFq0T871rCJGNbJJ2HVe39PS56X30vGVGw09CH5h76rxW5frxRNtNrow94Z7v7UOS22wQl1JUKJtHFklSk1bqjTcmaJuNAxcRThXuXKsCPERUWhjcJDdVyXKpmHG65rXlRsi6VVLpX/9k='/></td>
                <td>iPhone 8</td>
                <td>16</td>
                <td>20-2-2017</td>
                <td><span className="badge rounded-pill text-bg-primary" style={{fontWeight:"400",fontSize:"12px"}}>Paid</span></td>
                <td className='d-flex'>
                    <button className="btn btn-white border border-0 rounded-circle edit-btn" type="button"><svg fill="#36f" focusable="false" height="17" width="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"></path></svg></button>
                    <button className="btn btn-white border border-0 rounded-circle del-btn" type="button"><svg focusable="false" height="17" width="17"  viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"></path></svg></button>
                </td>
                </tr>
                
                <tr style={{fontSize:"12px"}}>
                <td className='px-4'>Lori Moore</td>
                <td>#45457898</td>
                <td><img alt='' height="33" src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//CABEIACgAFAMBEQACEQEDEQH/xAAbAAABBAMAAAAAAAAAAAAAAAABAAIDBAUGB//aAAgBAQAAAADvjL+psy0JClNttr//xAAXAQEBAQEAAAAAAAAAAAAAAAADAgQF/9oACAECEAAAAMktyw6ARpONLw3/xAAXAQEBAQEAAAAAAAAAAAAAAAACAwEE/9oACAEDEAAAALaOpwaktnPR/8QAMhAAAAQEBAMECwEAAAAAAAAAAQIDEQAEEhMUFSExBQZBIjJCYRYkJkRRcYGCorLB0f/aAAgBAQABPwA3NIhNTUrhgKZFU6QKnUEahKLVd1vpCfH51FQAVomAUMNJTMmBQEdNSEcW2jNj4C/aK+Js2rhqHZ6npqbyaJ0BzOf+AzK37DCRFzLAJBG2mzvqD7sEXTZFc7NeY0t0doCSNM8TnfCkEyrWf7x0DzjikoQhU1UQoIAUGKH4j/sU+yrNrmP8hSbOjOTYFFvWFtOnfGCzsuuQU1ezWDC+0WT+jtnx5kz9Nt4X5WTVmV1hnVUxVVOoZKyQaRMLiDjuHnA8poj7+qHyRTjIS5VgsSrbxN7EWyvU3dp2p6PH/8QAJhEAAQMCBAYDAAAAAAAAAAAAAQACEQMSBCFxwRMUIyRBgTFRYf/aAAgBAgEBPwB2LDXFsfCONA8Ljiy6MlXPUdqs5U9v73VVk1Xaqo2Mwo7f3uq5io7VXTkVHQj93T8K1xJJK5Jn2VwG2WeF/8QAIBEAAgEDBAMAAAAAAAAAAAAAAAERAgMTEBIiQxQjUf/aAAgBAwEBPwCmzKmTx39Mb3QWlxWkewocUITOwtriho7Cm80oM7MjmT//2Q=='/></td>
                <td>Redmi 4</td>
                <td>20</td>
                <td>17-2-2017</td>
                <td><span className="badge rounded-pill text-bg-secondary" style={{fontWeight:"400",fontSize:"12px"}}>Success</span></td>
                <td className='d-flex'>
                    <button className="btn btn-white border border-0 rounded-circle edit-btn" type="button"><svg fill="#36f" focusable="false" height="17" width="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"></path></svg></button>
                    <button className="btn btn-white border border-0 rounded-circle del-btn" type="button"><svg focusable="false" height="17" width="17"  viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"></path></svg></button>
                </td>
                </tr>
                
                <tr style={{fontSize:"12px"}}>
                <td className='px-4'>Austin Pena</td>
                <td>#62446232</td>
                <td><img alt='' height="33" src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/2wBDAQUFBQcGBw0HBw0cEhASHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wgARCAAoABQDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAABAUGB//EABsBAAEFAQEAAAAAAAAAAAAAAAIAAQMEBQYH/9oADAMBAAIQAxAAAADCguukSA6Wi7/nllJVw/F7qfv87aT0pnH7cKCcpHQppY3KScsH/8QALxAAAQMDAgQEBAcAAAAAAAAAAQIDBAAFEQYSByEiMRMyM0MIJEFRUmGCk6LB4v/aAAgBAQABPwDRvBVvUOj7Rd1aqu0ZyagqLLaMoR/Km/h/jleF6yvX7X+qj2w6Mud7szE+RMZjzOl97KVqy02eYBrhXf3o/DrT7CmW3W0MqCaOoUBlC24/zBI6D5Rz7/nV/kLmar1C87hK1Sh5OQ9JutJcWY9j07bLYLDKefYTsLodwheTV84sR7C7G3WZMpDqArdCnJeAV9QcDpNWa5nVb93urUdUZD8s4adO5Qw2gd8VHdfdtcMKUkDwmwMbRnpHLlSkFqYjwoyI+4AeGjbzOO/2rS28tXIO7UrErBGQPabqKd1ot6QhRKWkbjsP4R36aeWFyWXQFFA83QeWP0/0a06HnBclMsSFIMr22FKT6aPskV//xAAiEQACAQIGAwEAAAAAAAAAAAACAwAEBQEQERIiMUFSU2H/2gAIAQIBAT8AxIpqz1g4lpKahW5Il5g23l+S4AKXkAymuopWK9vUG9D85WMGodi3b3nyms5Zf//EACURAAEEAAUDBQAAAAAAAAAAAAIAAQMEBQYREiIhMVMTMkFhkf/aAAgBAwEBPwCOCAhHcaevW8imERN2EliOYZat2aDb0Z1JmgvT4+5YHKVyjHPJ3dYllUrlmScZdN30jyNJ52/FhNUqFUa/fT5XJCw7uSLbqndC6J+q/9k='/></td>
                <td>Jio</td>
                <td>15</td>
                <td>25-4-2017</td>
                <td><span className="badge rounded-pill text-bg-primary" style={{fontWeight:"400",fontSize:"12px"}}>Failed</span></td>
                <td className='d-flex'>
                    <button className="btn btn-white border border-0 rounded-circle edit-btn" type="button"><svg fill="#36f" focusable="false" height="17" width="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"></path></svg></button>
                    <button className="btn btn-white border border-0 rounded-circle del-btn" type="button"><svg focusable="false" height="17" width="17"  viewBox="0 0 24 24" aria-hidden="true"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"></path></svg></button>
                </td>
                </tr>
                
                
                
            </tbody>
        </table>
       </div>
        <div className='text-end d-flex flex-row-reverse px-4' style={{fontSize:"10px",color:"#36f"}}>
            <p className='fw-bold'>VIEW ALL ORDERS</p>
        </div>
        </div>
    </div>
  )
}

export default OrderList