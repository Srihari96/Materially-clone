import React from 'react'
import BasicInfoGrid from './BaseInfoGrid'

function BasicInfo() {
  return (
    <div className="row mt-4 py-2 px-4 mx-0">
        <BasicInfoGrid number="$30200" desc="All Earnings" cardFooterText="10% changes on profit" cardColor="rgb(244, 161, 0)"
        footerIcon={<><svg fill="white" focusable="false" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg></>}
        bodyIcon={<><svg height="30" width="30" fill="rgb(244, 161, 0)" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z" opacity=".3"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"></path></svg></>}
        />
        <BasicInfoGrid number="145" desc="Task" cardFooterText="28% task performance" cardColor="rgb(255, 65, 58)"
        footerIcon={<><svg fill="white"  width="16" height="16" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></svg></>}
        bodyIcon={<><svg height="30" width="30" fill="rgb(255, 65, 58)" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H4V5h16zM4 21V10h16v11H4z"></path><path d="M4 5.01h16V8H4z" opacity=".3"></path></svg></>}
        />
        <BasicInfoGrid number="290+" desc="Page Views" cardFooterText="10k daily views" cardColor="rgb(0, 172, 105)"
        footerIcon={<><svg  fill="white"  width="16" height="16"  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg></>}
        bodyIcon={<><svg height="30" width="30" fill="rgb(0, 172, 105)" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z" opacity=".3"></path><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"></path></svg></>}
        />
        <BasicInfoGrid number="500" desc="Downloads" cardFooterText="1k download in App store" cardColor="rgb(51, 102, 255)"
        footerIcon={<><svg fill="white"  width="16" height="16"  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg></>}
        bodyIcon={<><svg height="30" width="30" fill="rgb(51, 102, 255)"  focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.34 4.66L9 9v10h9l3-7v-2h-8.77z" opacity=".3"></path><path d="M21 8h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2zm0 4l-3 7H9V9l4.34-4.34L12.23 10H21v2zM1 9h4v12H1z"></path></svg></>}
        />
  </div>
  )
}

export default BasicInfo