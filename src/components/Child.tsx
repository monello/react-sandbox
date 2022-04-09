import React, { useEffect } from "react";

let renderCount = 0;

const Child = () => {
    useEffect(() => {
        renderCount++;
    });
    return (
        <div>Child 1 Component called span.higlight {renderCount} times.</div>
    );
};

export default Child;
