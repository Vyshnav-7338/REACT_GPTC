import React from 'react'
import './Error.css'
import { useNavigate } from 'react-router-dom'
function Error() {
   const Navigate = useNavigate()
   return (
      <div className='body'>
         <div id="error-page">
            <div className="content">
               <h2 className="header" data-text="Error">
                  Error
               </h2>
               <h4 data-text="Opps! Page not found">
                  Opps! FireBase Updation comming soon.......
               </h4>
               <p>
                  Sorry, the page you're looking for doesn't exist. Page Updating....
                  .
               </p>
               <div className="btns">
                  <a onClick={() => {
                     Navigate('/')
                  }}>return home</a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Error
