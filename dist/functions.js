"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    // Basic fundtion typing
    function sum(a, b) {
        return a + b;
    }
    console.log(`1 + 2 = ${sum(1, 2)}`);
    // no need to type the arguments or rturn types again as this is now inferred from the Type and...
    const multiply = (a, b) => a * b;
    console.log(`2 * 3 = ${multiply(2, 3)}`);
    // ... in this case it is inferred from the Interface
    const subtract = (a, b) => a - b;
    console.log(`10 - 5 = ${subtract(10, 5)}`);
    const sum2 = (a, b) => {
        // a Type-guard is required for optional params
        b = b || 0;
        return a + b;
    };
    console.log(`sum2(1): ${sum2(1)}`);
    // Optional using a default value
    const sum3 = (a, b = 0) => a + b;
    console.log(`sums(1): ${sum3(1)}`);
    // Unknow number of arguments
    const sumOfAll = (...numberArgs) => {
        return numberArgs.reduce((total, num) => total + num, 0);
    };
    console.log(`Sum of all = ${sumOfAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`);
    // Implmentation
    function calcArea(...args) {
        let area = 0;
        if (args.length === 2) {
            // we know we want to use the 1st function verstion: Rectangle
            area = args[0] * args[1];
        }
        else {
            // we know we want to use the 2nd function version: Square
            area = Math.pow(args[0], 2);
        }
        return area;
    }
    console.log(`Rectangle area: witdh: 2, height: 10 = ${calcArea(2, 10)}`);
    console.log(`Square area: length: 10 = ${calcArea(10)}`);
};
