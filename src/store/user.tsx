import { createContext, useState } from "react";

import UserObj, { UserContextObj } from "../models/user";

// Set up the User Context
// ------------------------------------------------------

// - Create the UserContext object to be used throughout the App
const defaultContextValue: UserContextObj = {
    user: {
        first: "",
        last: "",
    },
    updateUser: (first: string, last: string) => {},
};

// - Create the UserContext object to be used throughout the App
export const UserContext = createContext<UserContextObj>(defaultContextValue);

// Set Up the User Context Provider
// ------------------------------------------------------

// - Create the initialState required by useState()
const initialUserState = {
    first: "Morne",
    last: "Louw",
};

// - Create the Context Provider component that will be used to wrap the entire top-level section of the app where User Context needs
//   to be available to the Component and all its Chils components
const UserContextProvider: React.FC = (props) => {
    // Initialize the Initial State for the user
    const [user, setUser] = useState<UserObj>(initialUserState);

    // Define the updateUser method as "described" in the ./models/user.tsx
    const updateUser = (first: string, last: string) => {
        setUser({ first: first, last: last });
    };

    // Combine it all to create the value that is required by the Context Provider
    const contextValue: UserContextObj = {
        user: user,
        updateUser: updateUser,
    };

    // Create the Context Provider and wrap all children inside
    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
