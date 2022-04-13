import UserContextProvider from "../store/user";

import ContextParentComponent from "./ContextParentComponent";

const UseContextComponent = () => {
    return (
        <UserContextProvider>
            <ContextParentComponent />
        </UserContextProvider>
    );
};

export default UseContextComponent;
