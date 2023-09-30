// Типизация класса
class User {
    name: string;
    age: number;
    nickName: string;

    constructor(name: string, age: number, nickName: string) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
    }
}

// принимаем свойства при инициализации
const yauhen = new User('Yauhen', 31, 'webDev');




// четыре модификатора доступа
class User1 {
    public name: string; // значение по умолчанию плюс свободный доступ
    private nickName: string; // не может быть доступен за пределами класса
    protected age: number; // доступ к элементу могут получить только наследники
    readonly pass: number; // доступен только для чтения

    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass;
    }
}

const yauhen = new User1('Yauhen', 31, 'webDev', 123);

yauhen.name; // "Yauhen"
yauhen.nickName; // Это приватный метод! Кыш отсюда!
yauhen.age; // Ты не наследник класса! Кыш отсюда!
yauhen.pass = 42; // Это значение не изменяется! Кыш отсюда!



// дефолтные значения для элементов
class User2 {
    name: string;
    age: number = 20;

    constructor(name: string) {
        this.name = name;
    }
}

const user = new User2('Yauhen');




// сокращенная форма записи,  что бы не писать сначала описание а потом в конструкторе тоже самое
// свойства появятся в классе при его инициализации
class User3 {
    constructor(
        public name: string,
        public age: number,
    ) {}
}

const user = new User3('Yauhen', 20);


// аксессоры Get и Set
class User4 {
    private age: number = 20;

    constructor(public name: string) {}

    setAge(age: number) {
        this.age = age;
    }

    set myAge(age: number) {
        this.age = age;
    }
}

const yauhen = new User4('Yauhen');

yauhen.setAge(30); // 30
yauhen.myAge = 31; // 31
