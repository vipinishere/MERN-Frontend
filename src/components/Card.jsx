import React from 'react'
import {Link} from 'react-router-dom';

const Card = (props) => {
  return (
    <div className="col-3 my-1">
        <div className="card text-center ">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{props.email}</h6>
                <p className="card-text">Age:{props.age}</p>
                <Link to={`/update/${props.id}`} className="card-link">Edit</Link>
                <Link to='/' onClick={()=>{props.deleteData(props.id)}} className="card-link">Delete</Link>
            </div>
        </div>
    </div>
  )
}

export default Card;
