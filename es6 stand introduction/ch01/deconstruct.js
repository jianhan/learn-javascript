// ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）

let [a,
  b,
  c
] = [1, 2, 3]

let [foo, [
  [bar], baz
]] = [
  1, [
    [2], 3
  ]
];
foo // 1
bar // 2
baz // 3
let [, ,
  third
] = ["foo", "bar", "baz"];
third // "baz"
let [x, ,
  y
] = [1, 2, 3];
x // 1
y // 3
let [head,
  ...tail
] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]
let [x,
  y,
  ...z
] = ['a'];
x // "a"
y // undefined
z // []
// 如果解构不成功，变量的值就等于 undefined 。
let [foo] = [];
let [bar,
  foo
] = [1];

// partially deconstruct
let [x,
  y
] = [1, 2, 3];
x // 1
y // 2
let [a, [b],
  d
] = [
  1, [
    2, 3
  ],
  4
];
a // 1
b // 2
d // 4

// 报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};
// 上面的语句都会报错，因为等号右边的值，要么转为对象以后不具备 Iterator 接口 （ 前五个表达式） ，要么本身就不具备 Iterator 接口（
// 最后一个表达式） 。 对于 Set 结构，也可以使用数组的解构赋值。
let [x,
  y,
  z
] = new Set(['a', 'b', 'c']);
x // "a"

//事实上，只要某种数据结构具有 Iterator 接口，都可以采用数组形式的解构赋值

// default value
let [foo = true] = [];
foo // true
let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
