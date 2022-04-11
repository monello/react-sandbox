import { useState, useEffect } from "react";

const UseEffectComponent = () => {
    const [val, setVal] = useState(1);

    useEffect(() => {
        console.log("[UseEffectComponent]: useEffect is executed");

        const timer = setInterval(() => {
            console.log(
                "[UseEffectComponent]: useEffect > setInterval is executed"
            );
            setVal((currentVal) => currentVal + 1);
        }, 1000);

        // Here we return a clean-up function. This runs when this components dismounts.
        // In this case we tell it to delete the timer so it does not hang around in memory after the are done with thos component.
        return () => window.clearInterval(timer);
    }, []);

    return <div>{val}</div>;
};

export default UseEffectComponent;
