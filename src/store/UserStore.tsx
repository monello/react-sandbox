import { createContext, useState } from "react";

interface UserObj {
    first: string;
    last: string;
}

export interface UserContextObject {
    user: UserObj;
    updateUser: (first: string, last: string) => void;
}

const initialContext: UserContextObject = {
    user: {
        first: "",
        last: "",
    },
    updateUser: (first: string, last: string) => {},
};

export const UserContext = createContext<UserContextObject>(initialContext);

const UserContextProvider: React.FC = (props) => {
    const [user, setUser] = useState<UserObj>({
        first: "Morne",
        last: "Louw",
    });

    const updateUser = (first: string, last: string) => {
        setUser({ first: first, last: last });
    };

    const contextValue: UserContextObject = {
        user: user,
        updateUser: updateUser,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
