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
const keyIndexes = () => {
    // String keys, string values
    const stringExample = {
        'foo-key': 'foo-value',
        // 'bar-key': 1,            // ❌: the value is a number
        0: 'bar-value' // ✔: Also fine even through the key "0" is a number, because it can be converted to a string
    };
    stringExample[1] = 'foobar';
    stringExample.test = 'test';
    // stringExample[2] = 1;        // ❌: the value is a number
    console.log('stringExample', stringExample);
    // Number keys, string values
    // Use the when you know FOR SURE all the keys MUST be numbers
    const numbersExample = {
        0: 'zero',
        // 'One': 'One',            // ❌: key cannot be a string
        '1': 'One', // ✔: because the key can be converted to a number
        // 2: 2                     // ❌: because the value cannot be a number
    };
    numbersExample[3] = 'Three'; // ✔: key is a string
    // numbersExample['nope'] = 'Blah'  // ❌: because the key cannot be a string
    numbersExample['4'] = 'Four'; // ✔: because the key can be converted to a number;
    console.log('numbersExample', numbersExample);
    // Union Typed example
    const unionTypeExample = {
        'a': 'a',
        'b': 2,
        'c': true,
        0: 'foobar'
    };
    console.log('unionTypeExample:', unionTypeExample);
};
const sum = (value1, value2) => value1 + value2;
const functionInterface = () => {
    console.log(`4 + 4 = ${sum(4, 4)}`);
};
const child = {
    'a': 'A',
    'b': 'B',
    'c': 'C',
    'd': 'D', // ✔: specifying 'd' is required because it is part of the Child interface
    // 'e': 'E'    // ❌: because 'e` id not in Child or any of the Parent interfaces is extends
};
const extendingIntefaces = () => {
    console.log('child:', child);
};
const go = () => {
    interfaceBasics();
    keyIndexes();
    functionInterface();
    extendingIntefaces();
};
exports.default = go;
