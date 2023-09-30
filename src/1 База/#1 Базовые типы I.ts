// Типы данных в JavaScript
// - number 
// - string 
// - boolean 
// - null 
// - undefined 
// - object 
// - Symbol; // ES6 (2015)
// - BigInt; // ES11 (2020)

// JavaScript яаляясь языком с динамической типизацией, позволяет изменять значения типа переменной
// Это приводит к появлению в коде трудно уловимых ошибок.
// Изменение типа переменной в TypeScript приведёт к ошибке
var num = 42; // number
num = 'hello'; // string
num = false; // boolean

// Для определения типа в JavaScript применяется оператор typeof
typeof 123;         // "number"
typeof 'str';       // "string"
typeof true;        // "boolean"
typeof [];          // "object"
typeof {};          // "object"
typeof null;        // "object"
typeof undefined;   // "undefined"
typeof Symbol();    // "symbol"
typeof 123n;        // "bigint"

// После появления переменных let и const проблема частично ушла, но всё равно не работала со ссылочными значениями
// const
const num = 42;
num = 'hello'; // Uncaught TypeError: Присвоение постоянной переменной

// let
let num = 42;
num = 'hello'; // No errors


// Пример типизации переменной
// Задание типа
let isCompleted: boolean = false;

// Если попробуем изменить тип то получим ошибку
isCompleted = 42; // Type '42' is not assignable to type 'boolean'
isCompleted = '42'; // Type ’"42"' is not assignable to type 'boolean'

isCompleted = true;


// Number Type
const decimal: number = 6;
const integer: number = 7.1;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;


// String Type
const stroka: string = 'строка';

// String Type for template string (шаблонная строка)
const sentence: string = `Hello, my name is ${stroka}!`;


// Null & Undefined Types
// JavaScript:
typeof null; // "object"
typeof undefined; // "undefined"

// TypeScript types:
const u: undefined = undefined;
const n: null = null; // TS исправляет знаменитую ошибку в JS, теперь null это null, а в JS это object


// Void Type предназначен для определения отсутствующих типов
// Тип возвращаемого значения, указывается после () скобок:
const greetUser = (): void => {
    // функция ни чего не возвращает, по этому указывается void, указывается после () скобок
    alert('Hello, nice to see you!');
};

// For 'greetUser'
// Error: Type '() => void' is not assignable to type 'void'        // void' не может быть присвоен типу 'void' не там поставили void
const greetUser: void = () => {
    alert('Hello, nice to see you!');
};
