import './App.css';

import React from 'react';
import { useState, useCallback } from 'react';

function App() {
    let [input, setInput] = useState("");
    let [count, setCount] = useState(0);

    let incrementCount = useCallback(() => setCount(count + 1), [count]);

    return (
        <div className="App">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={incrementCount}>Increment</button>

            <h3>Input: {input}</h3>
            <h3>Count: {count}</h3>

            <hr />

            <ChildComponent
                count={count}
                incrementCount={incrementCount}
            />
        </div>
    );
}

let ChildComponent = React.memo(function ({ count, incrementCount }) {
    console.log("Child component rendered");

    return (
        <div>
            <h2>This is a child component</h2>

            <button onClick={incrementCount}>
                Increment
            </button>

            <h4>Count: {count}</h4>
        </div>
    );
})

export default App;
