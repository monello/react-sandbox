import UserContextProvider from "../store/user";

const UseContextComponent = () => {
    return (
        <UserContextProvider>
            <div>
                The Chiled Component that will be needing the User Context will
                go here
            </div>
        </UserContextProvider>
    );
};

export default UseContextComponent;
