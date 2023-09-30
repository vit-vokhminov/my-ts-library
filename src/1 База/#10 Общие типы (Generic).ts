// Generic это обозначение типов в общем виде
// позволяет создавать компоненты с общими типами

// как это типизировать?
const getter0 = (data: any): any => data;


// Дженерик типа для функции
const getter = <T>(data: T): T => data;

function getter2<T>(data: T): T {
    return data;
}

getter(10).length; // у числа нет метода 'length'
getter('test').length; // 4





const getter = <T>(data: T): T => data;

// можно указать какой аргумент будет принимать функция
getter<number>(10).length; // Property 'length' does not exist on type '10'
getter<string>('test').length; // 4




// generic тип для массива
let list: Array<number> = [1, 2, 3];





// generic в классе
class User {
    constructor(
        public name: string, 
        public age: number
    ) {}

    public getPass(): string {
        return `${this.name}${this.age}`;
    }
}

// Generic class
class User<T> {
    constructor(
        public name: T, 
        public age: T
    ) {}

    public getPass(): string {
        return `${this.name}${this.age}`;
    }
}

const yauhen = new User('Yauhen', '31');
const max = new User(123, 321);

yauhen.getPass(); // "Yauhen31"
max.getPass(); // "123321"





// если класс должен принимать и числа и строки
// Multiple generic types
class User<T, K> {
    constructor(
        public name: T, 
        public age: K
    ) {}

    public getPass(): string {
        return `${this.name}${this.age}`;
    }
}

const yauhen = new User('Yauhen', '31'); // string, string
const max = new User(123, 321); // number, number
const leo = new User('Leo', 22); // string, number

yauhen.getPass(); // "Yauhen31"
max.getPass(); // "123321"
leo.getPass(); // "Leo22"





// с помощью extends, говорим что generic должен быть числом
class User<T, K extends number> {
    constructor(public name: T, public age: K) {}

    public getPass(): string {
        return `${this.name}${this.age}`;
    }

    public getSecret(): number {
        return this.age ** 2;
    }
}

const yauhen = new User('Yauhen', 31);
const leo = new User(123, 321);

/*
  Error:
  Argument of type '"20"' is not assignable to parameter of type 'number'
*/
const max = new User('Max', '20');
