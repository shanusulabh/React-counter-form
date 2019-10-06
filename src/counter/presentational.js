import React from 'react';
import * as css from './style.css'

const Presentational = (props)=> {
    return(
        <div className='counter-css'>
            <h1>Counter : {props.count}</h1>
            <button className='button-css' onClick={props.handleIncrement}>+</button>
            <button className='button-css' onClick={props.handleDecrement}>-</button>
            <button className='button-css' onClick={props.reset}>Reset</button>
        </div>
    )
}

export default Presentational;