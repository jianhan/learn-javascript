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

// only undefined will trigger default value
let [x = 1] = [undefined];
x // 1
let [x = 1] = [null];
x // null

// 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由
// 它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的
// 值。
let { bar, foo } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"
let { baz } = { foo: "aaa", bar: "bbb" };
baz // undefined

// 如果变量名与属性名不一致，必须写成下面这样。
var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
baz // "aaa"
let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
f // 'hello'
l // 'world

// 这实际上说明，对象的解构赋值是下面形式的简写（ 参见《 对象的扩展》 一章） 。
let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
// 也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变
// 量。真正被赋值的是后者，而不是前者。
let { foo: baz } = { foo: "aaa", bar: "bbb" };
baz // "aaa"
foo // error: foo is not defined
// 上面代码中， foo 是匹配的模式， baz 才是变量。真正被赋值的是变量 baz ，
// 而不是模式 foo
