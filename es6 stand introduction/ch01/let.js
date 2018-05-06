// 但是所声明的变量，只在 let 命令所在的代码块内有效

{
    let a = 10;
    var b = 1;
}
// ReferenceError: a is not defined.
console.log(b) // 1
// a is not defined console.log(a) let with for example

for (let k = 0; k < 10; k++) {
    console.log(k)
}

var a = []
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log("In loop fetch value of I", i)
    }
}

console.log("Value of A6 is", a[6](), a[5]())

// scope
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}

// var 命令会发生”变量提升“现象，即变量可以在声明之前使用，值为 undefined 
console.log(x)
var x = 12

// tmp dead zone
var tmp = 123;
if (true) {
tmp = 'abc'; // ReferenceError
let tmp;
}