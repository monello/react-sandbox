import ConsumerComponent from "./ConsumerComponent";
import UserContextProvider from "../store/UserStore";

const UseContextComponent = () => {
    return (
        <UserContextProvider>
            <ConsumerComponent />
        </UserContextProvider>
    );
};

export default UseContextComponent;
