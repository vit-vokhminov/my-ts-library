// Глобальные данные
const SECRET: string = '123321';
const PI: number = 3.14;

const getPass = (name: string, age: number): string => `${name}${age}`;

const isEmpty = <T>(data: T): boolean => !data;



// namespace
namespace Utils {
    export const SECRET: string = '123321';
    const PI: number = 3.14;    // остаётся приватной

    export const getPass = (name: string, age: number): string =>
        `${name}${age}`;

    export const isEmpty = <T>(data: T): boolean => !data;
}



// Calling exported from namespace methods
const myPass = Utils.getPass('Yauhen', 31); // "Yauhen31"
const isSecret = Utils.isEmpty(Utils.SECRET); // "false"




// File "Utils.ts"
// Export
namespace Utils {
    export const SECRET: string = '123321';
    export const getPass = (name: string, age: number): string =>
        `${name}${age}`;
}

// Import namespace делается следующим образом
/// <reference path="Utils.ts" />         // <--- Import
const myPass = Utils.getPass('Yauhen', 31); // "Yauhen31"



// Import/Export (ES6 Modules) в ES6 уже не нужно описывать namespace, можно просто импортировать нужные значения
import { getPass, SECRET } from './Utils';

const myPass = getPass(SECRET, 31); // "Yauhen31"
