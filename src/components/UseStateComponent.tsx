import React, { useState } from "react";

function UseStateComponent() {
    const [arr, setArr] = useState<number[]>([]);
    const [name, setName] = useState<string | null>(null);

    return (
        <div>
            <div>
                <button onClick={() => setArr([...arr, arr.length + 1])}>
                    Add to Array
                </button>
                {JSON.stringify(arr)}
            </div>
            <div>
                <button onClick={() => setName("Morne")}>Set Name</button>
                {JSON.stringify(name)}
            </div>
        </div>
    );
}

export default UseStateComponent;
