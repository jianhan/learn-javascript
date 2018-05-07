// 字符串的遍历器接口
// ES6为字符串添加了遍历器接口（ 详见《 Iterator》 一章） ，使得字符串可以被 for...of 循环遍历

for (let codePoint of 'foo') {
  console.log(codePoint)
}

// 除了遍历字符串，这个遍历器最大的优点是可以识别大于 0xFFFF 的码点，传统的 for 循环无法识别这样的码点

// includes(), startsWith(), endsWith()
// 传统上，JavaScript只有 indexOf 方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6又提供了三种新方法

var s = 'Hello world!';
console.log(s.startsWith('Hello')) // true
console.log(s.endsWith('!')) // true
console.log(s.includes('o')) // true

// 这三个方法都支持第二个参数，表示开始搜索的位置。

var s = 'Hello world!';
console.log(s.startsWith('world', 6)) // true
console.log(s.endsWith('Hello', 5)) // true
console.log(s.includes('Hello', 6)) 
