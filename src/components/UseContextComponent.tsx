import { useState } from "react";

import UserStore, { UserState } from "../store/UserStore";

import ConsumerComponent from "./ConsumerComponent";

const UseContextComponent = () => {
    const [user, setUser] = useState<UserState>({
        first: "Morne",
        last: "Louw",
    });
    return (
        <UserStore.Provider value={user}>
            <ConsumerComponent />
        </UserStore.Provider>
    );
};

export default UseContextComponent;
