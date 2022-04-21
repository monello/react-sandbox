import React from "react";

import Pizza from "./Pizza";

// With the help of "resolveJsonModule" and "moduleResolution" settings in the .tsconfig.json TS can not read and understand the JSON file and also
//  build an object of it with the data in it
import pizzas from "../data/pizzas.json";

const App = () => {
    return (
        <ul>
            {pizzas.map((pizza) => (
                <Pizza key={pizza.id} pizza={pizza} />
            ))}
        </ul>
    );
};

export default App;
