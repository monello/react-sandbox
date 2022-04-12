import React, { useContext } from "react";

import { UserContext } from "../store/UserStore";
import { UserContextObject } from "../models/user";

const ConsumerComponent: React.FC = () => {
    // ## Typing the context can be inferred
    // const user = useContext(UserContext);
    // ## or done in one of the following 2 ways
    // const user: UserContextObject = useContext(UserContext);
    const userCtx = useContext<UserContextObject>(UserContext);

    const handleOnClick = () => {
        userCtx.updateUser("Heidi", "Thormahlen");
    };

    return (
        <>
            <div>First: {userCtx.user.first}</div>
            <div>Last: {userCtx.user.last}</div>
            <button onClick={handleOnClick}>Change User</button>
        </>
    );
};

export default ConsumerComponent;
