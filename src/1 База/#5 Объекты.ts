// обычный объект
let user = {
    name: 'Yauhen',
    age: 30,
};



// Define object type
let user: { name: string; age: number } = {
    name: 'Yauhen',
    age: 30,
};




// если есть два одинаковых массива
let user: { name: string; age: number; } = {
    name: 'Yauhen',
    age: 30,
};

let admin: { name: string; age: number; } = {
    name: 'Max',
    age: 20,
};

// просто создадим алиас
type Person = { 
    name: string; 
    age: number; 
};

let user: Person = {
    name: 'Yauhen',
    age: 30,
};

let admin: Person = {
    name: 'Max',
    age: 20,
};



// а что если два объекта похожи но немного отличаюся?
let user: Person = {
    name: 'Yauhen',
    age: 30,
    nickName: 'webDev'
};

let admin: Person = {
    name: 'Max',
    age: 20,
    getPass(): string {
        return `${this.name}${this.age}`;
    },
};

// Создадим необязательные параметры
type Person = {
    name: string;
    age: number;
    nickName?: string; // да вот так
    getPass?: () => string;
};
