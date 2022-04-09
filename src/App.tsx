import React, { useState } from "react";
import Child from "./components/Child";

function App() {
    const [foo, setFoo] = useState(0);

    const handleOnClick = () => {
        setFoo(foo + 1);
    };

    return (
        <div className="App">
            <h2>Using useMemo()</h2>
            <h3>foo: {foo}</h3>
            <button onClick={handleOnClick}>Increment</button>

            <h3>Without useMemo()</h3>
            <Child />
        </div>
    );
}

export default App;
