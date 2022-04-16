"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaceBasics = () => {
    // use the Profile interface to create a new profile object
    let profileA = {
        // Add all the required properties, this example shows that 'age' can be skipper
        id: 'p001',
        name: 'John'
    };
    let profileB = {
        id: 'p002',
        name: 'Cindy',
        age: 24 // here an oprional age is added
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
exports.default = go;
