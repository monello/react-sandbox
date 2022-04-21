import React from "react";

// 1. Describe a Pizza object
interface Pizza {
    id: number;
    name: string;
    description: string;
    price: number;
}

// 2. Describe the props that this component will expect
interface Props {
    pizza: Pizza;
}

// 3. Use the Props interface to tell TS what the structure of the props should be by passing the interface to the React.FC Generic
// 4 . Destructure the props-object as "pizza"
const Pizza: React.FC<Props> = ({ pizza }) => {
    return (
        <li>
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
        </li>
    );
};

export default Pizza;
