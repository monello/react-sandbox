import { useState, useEffect } from "react";

const UseEffectComponent = () => {
    const [val, setVal] = useState(1);

    useEffect(() => {
        console.log("[UseEffectComponent]: useEffect is executed");

        setInterval(() => {
            console.log(
                "[UseEffectComponent]: useEffect > setInterval is executed"
            );
            setVal((currentVal) => currentVal + 1);
        }, 1000);
    }, []);

    return <div>{val}</div>;
};

export default UseEffectComponent;
