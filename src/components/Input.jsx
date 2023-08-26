import React, { useState } from 'react'

const Input = (props) => {
    return (
        <div className="form-floating">
            <input 
            className={`form-control ${props.position}`}
            onChange={props.onChange} 
            type="text" name={props.name} 
            placeholder={props.placeholder} 
            value={props.value} 
            />
            <label htmlFor="floatingInput">{props.name}</label>
        </div>
    )
}

export default Input;
