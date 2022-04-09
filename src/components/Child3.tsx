import React, { useEffect } from "react";

let renderCount = 0;

const Child3: React.FC<{ bar: number }> = ({ bar }) => {
    useEffect(() => {
        renderCount++;
    });
    return (
        <div>
            Child 3 Component called {renderCount} times.
            <br />
            There has been {bar} even numbers.
        </div>
    );
};

export default Child3;
