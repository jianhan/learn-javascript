// ES5 只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。 第一种场景，内层变量可能会覆盖外层变量。
var tmp = new Date();
function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}
f(); // undefined

// 第二种场景，用来计数的循环变量泄露为全局变量。

var s = 'hello';
for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
}
console.log(i); // 5
// 上面代码中，变量 i 只用来控制循环，但是循环结束后，它并没有消失，泄露成 了全局变量