// Simple Class example
class User5 {
    constructor(
        public name: string, 
        public age: number
    ) {}
}

const yauhen = new User5('Yauhen', 31);

yauhen; // { name: 'Yauhen', age: 31 }



// static
class User6 {
    static secret = 12345; // свойства видны в классе при создании экземпляра

    constructor(public name: string, public age: number) {}
}

User6.secret;



// Call static property in class method
class User7 {
    static secret = 12345;

    constructor(
        public name: string, 
        public age: number
    ) {}

    getPass(): string {
        return `${this.name}${User7.secret}`;
    }
}

const yauhen = new User7('Yauhen', 30);

yauhen.getPass(); // "Yauhen12345"



// Наследование класса
class Yauhen extends User7 {
    name: string = 'Yauhen';
}

// Create instances based on 'User' and 'Yauhen' classes
const max = new User7('Max', 20);
const yauhen = new Yauhen(31); // передали один параметр, а нужно два, что делать?



// обявить значение name 
class Yauhen extends User {
    name: string = 'Yauhen';

    constructor(age: number) {
        super(name, age);
    }
}

// No error
// Create instances based on 'User' and 'Yauhen' classes
const max = new User('Max', 20);
const yauhen = new Yauhen(31);




// Abstract class
// это базовый класс от которого наследуются другие классы, абстракный класс содержит детали реализации других классов
abstract class AbstractUser {
    constructor(
        public name: string, 
        public age: number
    ) {}

    greet(): void {
        console.log(this.name);
    }

    abstract getPass(): string; // Abstract method, его реализация обязательно должна быть описана в потомке
}

// невозможно создавать экземпляры класса
const max = new AbstractUser('Max', 20); // Cannot create an instance of an abstract class


