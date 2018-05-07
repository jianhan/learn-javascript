// 1. Exchange variable
let x = 1;
let y = 2;
[x, y] = [y, x];

// 2. 函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便
function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();
console.log(a, b, c)

// 返回一个对象
function exampleArr() {
  return {
    foo: 1,
    bar: 2
  };
}
let {
  foo,
  bar
} = exampleArr();
console.log(foo,bar)

// 3. 函数参数的定义, 解构赋值可以方便地将一组参数与变量名对应起来

function printPerson({name, age, address}) {
  console.log(name, age, address)
}

printPerson({name: "James", age: 21, address: "james street"})

// 4. 提取JSON数据, 解构赋值对提取JSON对象中的数据，尤其有用
let jsonData = {
id: 42,
status: "OK",
data: [867, 5309]
};
let { id, status, data: number } = jsonData;
console.log(id, status, number);
