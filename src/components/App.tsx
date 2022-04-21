import React from "react";
// with the help of "resolveJsonModule" and "moduleResolution" settings in the .tsconfig.json TS can not read and understand the JSON file and also
//  build an object of it with the data in it
import pizzas from "../data/pizzas.json";

const App = () => {
    return <div>Hello World (App component)</div>;
};

export default App;
