import React, { useEffect } from "react";

let renderCount = 0;

const Child2 = () => {
    useEffect(() => {
        renderCount++;
    });
    return <div>Child 2 Component called {renderCount} times.</div>;
};

export default Child2;
