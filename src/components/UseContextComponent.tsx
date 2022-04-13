import UserContextProvider from "../store/user";

import ConsumerComponent from "./ContextConsumerComponent";

const UseContextComponent = () => {
    return (
        <UserContextProvider>
            <ConsumerComponent />
        </UserContextProvider>
    );
};

export default UseContextComponent;
