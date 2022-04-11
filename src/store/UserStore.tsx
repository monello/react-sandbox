import { createContext, useContext } from "react";

const initialState = {
    first: "Jack",
    last: "Herrington",
};

const context = createContext(initialState);
