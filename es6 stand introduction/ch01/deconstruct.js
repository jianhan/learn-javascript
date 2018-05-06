// ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）

let [a,
    b,
    c] = [1, 2, 3]

let [foo,
    [[bar], baz]] = [
    1,
    [[2], 3]
];
foo // 1
bar // 2
baz // 3
let [,,
    third] = ["foo", "bar", "baz"];
third // "baz"
let [x,,
    y] = [1, 2, 3];
x // 1
y // 3
let [head,
    ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]
let [x,
    y,
    ...z] = ['a'];
x // "a"
y // undefined
z // []
// 如果解构不成功，变量的值就等于 undefined 。
let [foo] = [];
let [bar,
    foo] = [1];

// partially deconstruct
let [x, y] = [1, 2, 3];
x // 1
y // 2
let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4