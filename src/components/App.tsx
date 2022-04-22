import React from "react";

import Pizza from "./Pizza";

// With the help of "resolveJsonModule" and "moduleResolution" settings in the .tsconfig.json TS can not read and understand the JSON file and also
//  build an object of it with the data in it
import pizzas from "../data/pizzas.json";

import styles from "./App.modules.css";
import PizzaSVG from "./svg/pizza.svg";

const App = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <PizzaSVG width={120} height={120} />
                <div className={styles.siteTitle}>Delicious Pizza</div>
            </div>
            <ul>
                {pizzas.map((pizza) => (
                    <Pizza key={pizza.id} pizza={pizza} />
                ))}
            </ul>
        </div>
    );
};

export default App;
