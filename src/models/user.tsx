// Describe the data for the User Object
export default interface UserObj {
    first: string;
    last: string;
}

// Describe the structure of the User Context object. It's data and methods
export interface UserContextObject {
    user: UserObj;
    updateUser: (first: string, last: string) => void;
}
