// декораторы - это возможность добавления аннотация и мета програмного синтаксиса для объявления классов и функций
// по сути декоратор это обычная функция
// может быть прикрелена к объявлению класс, функции, параметру и т.д.
// декораторы оборачивают декорируюмую сущьность и модифицируют её поведение
// в качестве единственного аргумента, функция классового декоратора должна принимать конструктор декорируемой сущьности

class User {
    constructor(
        public name: string, 
        public age: number
    ) {}

    public getPass(): string {
        return `${this.name}${this.age}`;
    }

}

// декоратор обыкновенный :)
// const logClass = () => ();

// Class Decorator
const logClass = (constructor: Function) => {
    console.log(constructor);   // Result of call: class User {}
};

@logClass       // <--- Apply decorator for class
class User2 {
    constructor(
        public name: string, 
        public age: number
    ) {}

    public getPass(): string {
        return `${this.name}${this.age}`;
    }

}

// декоратор свойства
const logProperty = (target: Object, propertyKey: string | symbol) => {
    console.log(propertyKey);   // Result of call: "secret"
};

class User3 {
    @logProperty        // <--- Apply decorator for property
    secret: number;

    constructor(
        public name: string, 
        public age: number, 
        secret: number
    ) {
        this.secret = secret;
    }

    public getPass(): string {
        return `${this.name}${this.age}`;
    }
}




// Decorator метода
const logMethod = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
) => {
    console.log(propertyKey);   // Result of call: "getPass"
};

class User4 {
    constructor(
        public name: string, 
        public age: number
    ) {}

    @logMethod          // <--- Apply decorator for method
    public getPass(): string {
        return `${this.name}${this.age}`;
    }
}



// get/set Decorator
const logSet = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
) => {
    console.log(propertyKey);   // Result of call: "myAge"
};

class User5 {
    constructor(
        public name: string, 
        public age: number
    ) {}

    @logSet     // <--- Apply decorator for set
    set myAge(age: number) {
        this.age = age;
    }
}




// фабрика декораторов
function factory(value: any) {        // Factory
    return function (target: any) {   // Decorator
        console.log(target);          // Decorator logic
    }
}

// например
const enumerable = (value: boolean) => {
    return (
        target: any,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) => {
        descriptor.enumerable = value;
    };
}

class User66 {
    constructor(
        public name: string, 
        public age: number
    ) {}

    @enumerable(false)          // <--- Call decorator factory with argument
    public getPass(): string {
        return `${this.name}${this.age}`;
    }
}




// декомпозиция декораторов
// Apply decorators (one line)
// @f @g x

// Apply decorators (multiple lines)
// @f
// @g
// x





// Example of two factory decorators
const first = () => {
    console.log('first() completing');
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        console.log('first() called');
    };
}

const second = () => {
    console.log('second() completing');
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        console.log('second() called');
    };
}





// Apply and call two factory decorators
class User6 {
    constructor(
        public name: string, 
        public age: number
    ) {}

    @first()
    @second()
    public getPass(): string {
        return `${this.name}${this.age}`;
    }

}

// Call results:
"first() completing"      // Factory 1
"second() completing"     // Factory 2
"second() called"         // Decorator 2
"first() called"          // Decorator 1