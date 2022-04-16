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

// Index Signatures
// - Used when you don't know before-hand what the key-names are, but you the values will be strings

interface StringKeys {
    // This says you can assign any key to this object as long as the value is a string
    // [key: string] allows numbers as key-names too because it will get translated to a string anyway
    [key: string]: string;
}

interface NumberKeys {
    // This says you can only assign properties when the key is a number and the value is a string
    [key: number]: string;
}

// REDUNDANT EXAMPLE!!
interface StringNumberRedundant {
    // This says you can only assign properties when the key is a string and the value is a string
    [key: string]: string;
    // This says you can also assign properties when the key is a number and the value is s string
    // (but this applies to the above key-index too as both number and string keys are converted to string, therefore redundant)
    [key: number]: string;
}

// CONFLICTING EXAMPLE
interface StringNumberConflicting {
    [key: string]: number,
    // [key: number]: string    // ❌: 'number' index type 'string' is not assignable to 'string' index type 'number'
}

// Union Type values
interface StingKeysWithUnionValue {
    // This says
    [key: string]: string | number | boolean;
}

const keyIndexes = () => {
    // String keys, string values
    const stringExample: StringKeys = {
        'foo-key': 'foo-value',     // ✔: both the key and the value are string
        // 'bar-key': 1,            // ❌: the value is a number
        0: 'bar-value'              // ✔: Also fine even through the key "0" is a number, because it can be converted to a string
    };
    stringExample[1] = 'foobar';
    stringExample.test = 'test';
    // stringExample[2] = 1;        // ❌: the value is a number
    console.log('stringExample', stringExample);


    // Number keys, string values
    // Use the when you know FOR SURE all the keys MUST be numbers
    const numbersExample: NumberKeys = {
        0: 'zero',                  // ✔: key is a number and value is s string
        // 'One': 'One',            // ❌: key cannot be a string
        '1': 'One',                 // ✔: because the key can be converted to a number
        // 2: 2                     // ❌: because the value cannot be a number
    };
    numbersExample[3] = 'Three';        // ✔: key is a string
    // numbersExample['nope'] = 'Blah'  // ❌: because the key cannot be a string
    numbersExample['4'] = 'Four';       // ✔: because the key can be converted to a number;
    console.log('numbersExample', numbersExample);

    // Union Typed example
    const unionTypeExample: StingKeysWithUnionValue = {
        'a': 'a',
        'b': 2,
        'c': true,
        0: 'foobar'
    };
    console.log('unionTypeExample:', unionTypeExample);
};

// Interfaces to describe functions
interface Sum {
    // Here we are giving the shape of a functon
    // - We expect 2 arguments abd both must be of type number
    // - We expect the function to return a number
    (a: number, b: number): number;
}

const sum: Sum = (value1: number, value2: number) => value1 + value2;

const functionInterface = () => {
    console.log(`4 + 4 = ${sum(4, 4)}`);

};

// Extending Interfaces

interface Parent1 {
    'a': string;
}
interface Parent2 {
    'b': string;
}
interface Parent3 {
    'c': string;
}

interface Child extends Parent1, Parent2, Parent3 {
    'd': 'D';
}

const child: Child = {
    'a': 'A',      // ✔: specifying 'a' is required due to extending (inheriting from) Parent 1
    'b': 'B',      // ✔: specifying 'b' is required due to extending (inheriting from) Parent 2
    'c': 'C',      // ✔: specifying 'c' is required due to extending (inheriting from) Parent 3
    'd': 'D',      // ✔: specifying 'd' is required because it is part of the Child interface
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

export default go;
