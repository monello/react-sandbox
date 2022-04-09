import React, { useEffect } from "react";

let renderCount = 0;

const Child = () => {
    useEffect(() => {
        renderCount++;
    });
    return <div>Child Component called {renderCount} times.</div>;
};

export default Child;
