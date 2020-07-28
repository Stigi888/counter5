import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Counter from "./Counter";

function App() {
    const [counters, setCounters] = useState([4, 11, 34]);
    //const [customCounters, setCustomCounters] = useState([])


    const addCounter = () => {
        const r = Math.round(Math.random() * 10);
        // const updatedCounters = [...counters];
        // updatedCounters.push({id: uuid(), count: num});
        setCounters([...counters, r]);
    };

    const plusOne = (index) => {
        console.log('plusOne', index);
    };

    const addCount = (index) => {
        let add = [...counters];
        add[index] += 1;
        setCounters(add);
    }

    const decreaseCount = (index) => {
        let decrease = [...counters];
        decrease[index] -= 1;
        setCounters(decrease);
    }

    const deleteCount = (index) => {
        let count = [...counters];
        count.splice(index, 1);
        setCounters(count);
    }
    //The Second decision for delete counter (1 row)

    // const deleteCount = (id) => {
    //     const updatedCounters = counters.filter(el => el.id !== id);
    //     setCounters(updatedCounters);


const resetCount = (index) => {
    let res = [...counters];
    res[index] = 0;
    setCounters(res);
}

const deleteAll = () => {
    setCounters([]);
}

const resetAll = () => {
    const newCounter = counters.map((el) => 0);
    setCounters(newCounter);
}

//const addClickBut = () =>

return (
    <div className="App">
        <div className="container">
        Counter
        <button className="btn btn-success" onClick={addCounter}>Add Counter</button>
        <button className="btn btn-warning" onClick={resetAll}>Reset All</button>
        <button className="btn btn-danger" onClick={deleteAll}>Delete All</button>
        <hr/>
        {counters.map((el, i) =>
            (<Counter
                    count={el}
                    key={i}
                    index={i}
                    plus={plusOne}
                    addCount={addCount}
                    decreaseCount={decreaseCount}
                    deleteCount={deleteCount}
                    resetCount={resetCount}
                />
            ))}
        </div>
    </div>
);
}



export default App;
