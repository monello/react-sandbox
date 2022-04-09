import React, { useState, useMemo } from "react";
import Child from "./components/Child";
import Child2 from "./components/Child2";
import Child3 from "./components/Child3";

function App() {
    const [foo, setFoo] = useState(0);
    const [bar, setBar] = useState(0);
    const [isEven, setIsEven] = useState(false);

    const handleOnClick = () => {
        setFoo(foo + 1);
        if (foo % 2) {
            setBar(bar + 1);
            setIsEven(true);
        } else {
            setIsEven(false);
        }
    };

    const MemoizedChild = useMemo(() => <Child2 />, []);
    const MemoizedChild2 = useMemo(() => <Child3 />, [bar]);

    return (
        <div className="App">
            <h2>Using useMemo()</h2>
            <h3>
                foo: {foo} {isEven && <span>Even</span>}
            </h3>
            <button onClick={handleOnClick}>Increment</button>

            <h3>Without useMemo()</h3>
            <p>Will update on each render</p>
            <Child />

            <h3>With useMemo()</h3>
            <p>Will Never update</p>
            {MemoizedChild}

            <h3>With useMemo() with dependency</h3>
            <p>Will update each time renderCount is an even number</p>
            {MemoizedChild2}
        </div>
    );
}

export default App;
