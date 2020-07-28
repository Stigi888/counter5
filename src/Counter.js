import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";



function Counter(props) {

    // console.log(props)
    return (
        <div>
            Index: ({props.index})
            <button className="btn btn-info" onClick={()=> props.decreaseCount(props.index)}>-</button>
            <span>{props.count}</span>
            <button className="btn btn-info" onClick={()=> props.addCount(props.index)}>+</button>
            <button className="btn btn-warning" onClick={()=> props.resetCount(props.index)}>Reset this counter</button>
            <button className="btn btn-danger" onClick={()=> props.deleteCount(props.index)}>Delete</button>

        </div>
    );
}

export default Counter;