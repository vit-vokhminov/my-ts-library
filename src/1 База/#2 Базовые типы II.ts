// Array Type, существуют два способа определения массива
let list: number[] = [1, 2, 3]; // мы говорим что тип данных это числа и эти числа будут находится в массиве

let list: Array<number> = [1, 2, 3]; // Generic type


// Tuple Type если в массиве разный тип данных
// Multiple lines
let x: [string, number];
x = ['hello', 10];

// One line
let y: [string, number] = ['goodbuy', 42];

// Error case:
x = [10, 'hello']; // Type 'string' is not assignable to type 'number'


// Any Type
// Any type for array
let y: [any, any] = ['goodbuy', 42];
let z: Array<any> = [10, 'hello'];

// Any type for string
let notSure: any = false;

// Issue case (no error)
notSure = true; // boolean
notSure = 42; // number
notSure = 'hello'; // string


// Enum Type  это способ задания понятных имён
enum Directions {
    Up = 1, // индекс можно переопределить
    Down = 2,
    Left = 3,
    Right = 4,
}

Directions.Up;      // 1
Directions.Down;    // 2
Directions.Left;    // 3
Directions.Right;   // 4


// Never Type
// используется когда функция возвращает ошибку и не заканчивает своё выполнение
// или когда фунция постоянно выполняется
// этот тип говорит что от этих функций результата мы не получим
// Function return Error
const msg = 'hello';
const error = (msg: string): never => {
    // функция возвращает ошибку
    throw new Error(msg);
};

// Function infinite loop
const infiniteLoop = (): never => {
    // функция находится в бесконечном цикле
    while (true) {}
};


// Object Type указывет что это объект или не примитив
const create = (arg: object | null): void => {};

// если попробуем вызвать эту функцию не с object || null получим ошибку
create(1); // Argument of type '1' is not assignable to parameter of type 'object | null'
create('42'); // Argument of type '"42"' is not assignable to parameter of type 'object | null'
create({ obj: 1 });


// Multiple types (объединение), если переменная может иметь несколько типов
let id: number | string; // указываем возможные варианты типа переменной

id = 10; // number is valid
id = '42'; // string is valid
id = true; // Type 'true' is not assignable to type 'string | number'


// Type можем создавать пользовательские типы
type TypeId = string; // определяем алиас для кастомного типа

let id: TypeId;

id = '42'; // ошибки нет
id = 10; // Error, не строка
