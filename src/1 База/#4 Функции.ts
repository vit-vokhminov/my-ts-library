// Function example
const createPassword = (name, age) => `${name}${age}`;

createPassword('Jack', 31); // "Jack31"


// Описание аргументов функции
const createPassword = (name: string, age: number) => `${name}${age}`;

// Multiple argument types
const createPassword = (name: string, age: number | string) => `${name}${age}`;

createPassword('Jack', 31); // 'Jack31'
createPassword('Jack', '31'); // 'Jack31'


// Default Arguments
const createPassword = (name: string = 'Max', age: number | string = 20) =>
    `${name}${age}`;

createPassword(); // "Max20"
createPassword(null); // Argument of type 'null' is not assignable to parameter of type 'string | undefined'


// Function with two required arguments
const createPassword = (name: string, age: number): string => `${name}${age}`;

// Call function with one argument
createPassword('Jack'); // 'An argument for 'age' was not provided.'


// Function with optional argument 'age'    знак ? это опциональный аргумент, может быть, может нет
const createPassword = (name: string, age?: number) => `${name}${age}`;



// REST
const createSkills = (name, ...skills) =>
    `${name}, my skils are ${skills.join()}`;

// REST type
const createSkills = (name: string, ...skills: Array<string>) =>
    `${name}, my skils are ${skills.join()}`;

// Call function with REST arguments
createSkills('Jack', 'JS', 'ES6', 'React'); // "Jack, my skils are JS,ES6,React"



// Returned type is string в нашем случае это строка
const createPassword = (name: string, age: number | string): string =>
    `${name}${age}`;

// Returned type is number
const sum = (first: number, second: number): number => first + second;



// Returned type is object
const createEmptyObject = (): object => ({});



// Void
const greetUser: void = () => {
    alert('Hello, nice to see you!');
};



// Never Type
// Function return Error
const msg = 'hello';
const error = (msg: string): never => {
    throw new Error(msg);
};

// Function infinite loop
const infiniteLoop = (): never => {
    while (true) {}
};



// тип функций
// Function type description для присвоения переменной функции используется синтаксис функции стрелки
let myFunc: (firstArg: string) => void;

function oldFunc(name: string): void {
    alert(`Hello ${name}, nice to see you!`);
}

myFunc = oldFunc;
