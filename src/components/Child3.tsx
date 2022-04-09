import React, { useEffect } from "react";

let renderCount = 0;

const Child3 = () => {
    useEffect(() => {
        renderCount++;
    });
    return <div>Child 3 Component called {renderCount} times.</div>;
};

export default Child3;
