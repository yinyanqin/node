var path = require('path'); //处理文件路径操作
// console.log(__dirname)//当前文件夹在计算机的位置（物理路径）
// console.log(__filename) //当前文件的位置
var a = path.join('www','err','404.html'); //把字符串连接成一个路径
console.log(a) ;//www\err\404.html



// 路径的三种形式：
// 物理路径 E:\node
// 相对路径 ./../index.html
// 网络路径 https://www.baidu.com
