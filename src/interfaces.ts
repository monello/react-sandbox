// Interfaces
interface Profile {
    name: string;        // Required property
    age?: number;        // Oprional property
    readonly id: string; // Readonly and required property
}

const interfaceBasics = () => {
    // use the Profile interface to create a new profile object
    let profileA: Profile = {
        // Add all the required properties, this example shows that 'age' can be skipper
        id: 'p001',
        name: 'John'
    };

    let profileB: Profile = {
        id: 'p002',
        name: 'Cindy',
        age: 24             // here an oprional age is added
    };

    // You can change non-readonly properties on-the-fly
    profileA.name = 'Peter';
    profileA.age = 40;

    // TS sill stop you from trying to update the id prop due to readonly flag
    // profileA.id = 'p003'

    console.log('profileA:', profileA);
    console.log('profileB:', profileB);
};

const go = () => {
    interfaceBasics();
};

export default go;
