// Simple example of enum type
enum Directions {
    Up,
    Down,
    Left,
    Right,
}

Directions.Up; // 0
Directions.Down; // 1
Directions.Left; // 2
Directions.Right; // 3

// Reverse enum
enum Directions {
    Up,
    Down,
    Left,
    Right,
}

// получить данные можем и по ключю
Directions[0]; // "Up"
Directions[1]; // "Down"
Directions[2]; // "Left"
Directions[3]; // "Right"


// Custom index for enum elements
enum Directions {
    Up = 2,
    Down = 4,
    Left = 6,
    Right = 8,
}

Directions.Up; // 2
Directions.Down; // 4
Directions[6]; // Left
Directions[8]; // Right

// Custom name for keys
enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/',
}

// Using
links.vk; // "https://vk.com/"
links.youtube; // "https://youtube.com/"

// Результат компиляции, получается сгенерированный объект
('use strict');
var links;
(function (links) {
    links['youtube'] = 'https://youtube.com/';
    links['vk'] = 'https://vk.com/';
    links['facebook'] = 'https://facebook.com/';
})(links || (links = {}));


// константное перечисление, лучше задавать значение через const
const enum links {
    youtube = 'https://youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/',
}

// в этом случае объект будет генерироваться по мере использования
const arr = [links.vk, links.facebook];
