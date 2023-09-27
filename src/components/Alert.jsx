const Alert = (props) => {
  return (
    <>
    <div className="alert-placeholder">
   {props.msg && (<div className="alert alert-warning show" role="alert">
         {props.msg}
    </div>)}
    </div>
    </>
  )
}

export default Alert;
