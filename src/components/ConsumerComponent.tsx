import React, { useContext } from "react";

import UserStore, { UserState } from "../store/UserStore";

const ConsumerComponent = () => {
    // ## Typing thr context can be inferred
    // const user = useContext(UserStore);
    // ## or done in one of the following 2 ways
    // const user: UserState = useContext(UserStore);
    const user = useContext<UserState>(UserStore);

    return (
        <>
            <div>First: {user.first}</div>
            <div>last: {user.last}</div>
        </>
    );
};

export default ConsumerComponent;
