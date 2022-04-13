import React, { useContext } from "react";

import { UserContext } from "../store/user";
import { UserContextObj } from "../models/user";

const ConsumerComponent: React.FC = () => {
    // ## Typing the context can be inferred
    // const user = useContext(UserContext);
    // ## or done in one of the following 2 ways
    // const user: UserContextObj = useContext(UserContext);
    const userCtx = useContext<UserContextObj>(UserContext);

    const handleOnClick = () => {
        userCtx.updateUser("Heidi", "Thormahlen");
    };

    return (
        <>
            <h3>The Context Consumer (Child) Component</h3>
            <p>I use the User Context Object</p>
            <div>First: {userCtx.user.first}</div>
            <div>Last: {userCtx.user.last}</div>
            <button onClick={handleOnClick}>Change User</button>
        </>
    );
};

export default ConsumerComponent;
