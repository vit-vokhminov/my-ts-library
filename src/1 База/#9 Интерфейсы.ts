// Interface именованный тип объекта, может extends
interface User {
    name: string;
    age: number;
}
// type это межанизм создания псевдонима для любого типа
type User = {
    name: string;
    age: number;
};




const yauhen: User = {
    name: 'Yauhen',
    age: 31,
};




// блокировка изменений
interface User2 {
    readonly name: string;
    age: number;
    page: 5;
}

const yauhen: User2 = {
    name: 'Yauhen',
    age: 31,
    page: 5,
};

yauhen.age = 30;
yauhen.name = 'Max'; // Cannot assign to 'name' because it is a read-only property
yauhen.page = 1; // Error



// расширение значений в объекте
interface User3 {
    name: string;
    age: number;
    [key: string]: any;
}

const yauhen: User3 = {
    name: 'Yauhen',
    age: 31,
    nickName: 'webDev',
    justTest: 'test',
};




// типы классов
interface User4 {
    name: string;
    age: number;
    getPass(): string;
}

// если делаем implements, то в классе нужно реализовать минимальный набор параметров
class Yauhen implements User4 {
    name: string = 'Yauhen';
    age: number = 31;
    nickName: string = 'webDev';

    getPass() {
        return `${this.name}${this.age}`;
    }
}



// implements на основе нескольких интерфейсов
interface User5 {
    name: string;
    age: number;
}

interface Pass {
    getPass(): string;
}

class Yauhen implements User5, Pass {
    name: string = 'Yauhen';
    age: number = 31;

    getPass() {
        return `${this.name}${this.age}`;
    }
}




// расширение интерфейсов
interface User {
    name: string;
    age: number;
}

interface Admin extends User {
    getPass(): string;
}

class Yauhen implements Admin {
    name: string = 'Yauhen';
    age: number = 31;

    getPass() {
        return `${this.name}${this.age}`;
    }
}
