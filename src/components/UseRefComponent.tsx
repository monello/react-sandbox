import { useRef, useState } from "react";

const UseRefComponent = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [val, setVal] = useState<string | null>(null);

    const handleOnChange = () => {
        if (!inputRef.current) throw Error("divRef is not assigned");
        setVal(inputRef.current.value);
    };

    return (
        <>
            <div>This input contains: {val ? val : <em>Nothing</em>}</div>
            <input type="text" ref={inputRef} onChange={handleOnChange} />
        </>
    );
};

export default UseRefComponent;
