// TypeScript предоставляет 16 утилит для упрощения базовых преобразований



// #1
// Readonly<T> - только для чтения
interface User {
    name: string;
}

const user: Readonly<User> = {
    name: 'Yauhen',
};

user.name = 'Max'; // Error: cannot reassign a readonly property



// #2
// Partial<T> - делает все свойства объекта необязательными.
interface Person {
    name: string;
    age: number;
}

const partialPerson: Partial<Person> = {
    name: 'строка',
}; // OK



// #3
// Required<T> -  делает все свойства объекта обязательными.
interface Props {
    a?: number;
    b?: string;
}

const obj: Props = {
    a: 5,
}; // OK

const obj2: Required<Props> = {
    a: 5,
}; // Error: property 'b' missing



// #4
// Readonly<T> - делает все свойства объекта доступными только для чтения.
interface Point {
    x: number;
    y: number;
}

const readonlyPoint: Readonly<Point> = {
    x: 1,
    y: 1,
};



// #3
// Record<K, T> - создайт набор свойств из типа перечисления
interface PageInfo {
    title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
};



// #4
// Pick<T, K> - выбирает свойства объекта из указанного типа
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
    title: 'строка',
    completed: false,
};



// #5
// Omit<T, K> - по сути extends от указанного типа, исключая указанные свойства (удаляет ненужные свойства)
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
};



// #6
// Exclude<T, U> - вторым аргументом указываем какие типы нужно исключить из первого аргумента
type T0 = Exclude<'a' | 'b' | 'c', 'a'>; // "b" | "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number



// #7
// Extract<T, U> - оставляет только переданные свойства указанные во втором аргументе
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>; // "a"
type T1 = Extract<string | number | (() => void), Function>; // () => void



// #8
// NonNullable<T> - выбрасывает все не существующие типы, т.е. null и undefined
type T0 = NonNullable<string | number | undefined>; // string | number
type T1 = NonNullable<string[] | null | undefined>; // string[]



// #9
// Awaited -  обозначения типа, который будет возвращен из асинхронной функции.



// #10
// ReturnType<T> - создаёт тип из возвращаемого функцией типа
declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>; // string
type T1 = ReturnType<(s: string) => void>; // void
type T2 = ReturnType<<T>() => T>; // {} - по дефолту
type T3 = ReturnType<<T extends X, X extends number[]>() => T>; // number[]
type T4 = ReturnType<typeof f1>; // { a: number, b: string }



// #11
// InstanceType<T> - создаётся тип состоящий из типа экземпляра функции конструктора
class C {
    x = 0;
    y = 0;
}

type T0 = InstanceType<typeof C>; // C
