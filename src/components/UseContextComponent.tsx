import { useState } from "react";

import UserStore, { UserState } from "../store/UserStore";

const UseContextComponent = () => {
    const [user, setUser] = useState<UserState>({
        first: "Morne",
        last: "Louw",
    });
    return <UserStore.Provider value={user}></UserStore.Provider>;
};

export default UseContextComponent;
