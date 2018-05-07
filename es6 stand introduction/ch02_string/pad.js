// padStart()，padEnd()
// ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。 padStart() 用于头部补全， padEnd() 用于尾部补全。

'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'
'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'

// 如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串

'xxx'.padStart(2, 'ab') // 'xxx'
'xxx'.padEnd(2, 'ab') // 'xxx

// 如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串
'abc'.padStart(10, '0123456789')
// '0123456abc'

// 如果省略第二个参数，默认使用空格补全长度
'x'.padStart(4) // ' x'
'x'.padEnd(4) // 'x '

// padStart 的常见用途是为数值补全指定位数。下面代码生成10位的数值字符串
'1'.padStart(10, '0') // "0000000001"
'12'.padStart(10, '0') // "0000000012"
'123456'.padStart(10, '0') // "0000123456"

// 另一个用途是提示字符串格式
'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"