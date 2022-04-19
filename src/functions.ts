
export default () => {
    // Basic fundtion typing
    function sum(a: number, b: number): number {
        return a + b;
    }
    console.log(`1 + 2 = ${sum(1, 2)}`);

    // Using a custom Type
    type MyFunc = (a: number, b: number) => number;

    // Ising an interface
    interface MyFunc2 {
        (a: number, b: number): number;
    }

    // no need to type the arguments or rturn types again as this is now inferred from the Type and...
    const multiply: MyFunc = (a, b) => a * b;
    console.log(`2 * 3 = ${multiply(2, 3)}`);

    // ... in this case it is inferred from the Interface
    const subtract: MyFunc2 = (a, b) => a - b;
    console.log(`10 - 5 = ${subtract(10, 5)}`);

    // Making arguments optional
    type FuncWithOptional = (a: number, b?: number) => number;
    const sum2: FuncWithOptional = (a, b?) => {
        // a Type-guard is required for optional params
        b = b || 0;
        return a + b;
    };
    console.log(`sum2(1): ${sum2(1)}`);

    // Optional using a default value
    const sum3 = (a: number, b = 0) => a + b;
    console.log(`sums(1): ${sum3(1)}`);

    // Unknow number of arguments
    const sumOfAll = (...numberArgs: number[]): number => {
        return numberArgs.reduce(
            (total, num) => total + num,
            0
        );
    };
    console.log(`Sum of all = ${sumOfAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`);

    // Function Overloads
    function calcArea(width: number, height: number): number;   // Calculates the area of a Rectangle
    function calcArea(length: number): number;                  // Calculates the area of a Square
    // Implmentation
    function calcArea(...args: number[]) {
        let area = 0;
        if (args.length === 2) {
            // we know we want to use the 1st function verstion: Rectangle
            area = args[0] * args[1];
        } else {
            // we know we want to use the 2nd function version: Square
            area = Math.pow(args[0], 2);
        }
        return area;
    }

    console.log(`Rectangle area: witdh: 2, height: 10 = ${calcArea(2, 10)}`);
    console.log(`Square area: length: 10 = ${calcArea(10)}`);


};

