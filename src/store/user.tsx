import { createContext } from "react";

import { UserContextObject } from "../models/user";

// Set up the User Context
// ------------------------------------------------------

// - Create the UserContext object to be used throughout the App
const defaultContextValue: UserContextObject = {
    user: {
        first: "",
        last: "",
    },
    updateUser: (first: string, last: string) => {},
};

// - Create the UserContext object to be used throughout the App
export const UserContext =
    createContext<UserContextObject>(defaultContextValue);
