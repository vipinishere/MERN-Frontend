import React from 'react'

const Alert = (props) => {
  return (
    <>
    <div className="alert-placeholder">
   {props.error && (<div className="alert alert-warning show" role="alert">
         {props.error}
    </div>)}
    </div>
    </>
  )
}

export default Alert;
