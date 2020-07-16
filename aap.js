var fs = require('fs');//文件(引入一个模块)
// 一、写
// 1.同步的写法
// console.log('111') //1
// var res = fs.writeFileSync('./www/w3.txt', '第一个文字','utf8');
// var res = fs.writeFileSync('./www/w3.txt','第一个文字');//utf8可以省略
// console.log(res); //2
// console.log( '222') //3

// 2.异步的写法
// console.log('111') //1
// fs.writeFile('./www/t2.txt','异步写法','utf8',function(err){
//     console.log(err);//3
//     if(err) {
//         console.log('写入失败');
//         throw err;
//     }
//     console.log('写入成功')
// })
// console.log( '222') //2

// 二、读
//1.读文件(同步)
// var data = fs.readFileSync('./www/w1.txt','utf8');
// console.log(data);

//2.异步读取
//                                         err:错误 ，data:数据
// fs.readFile('./www/w3.txt','utf8',function(err,data){
//     console.log(err);
//     // console.log(data.toString());//如果参数中没有utf8  则需要用toString将数据转换成字符串类型
//     if(err){
//         console.log("读出错");
//         throw err;
//     }
//     console.log(data)
// })

// 三.文件是否存在
// 1.同步
// var res = fs.existsSync('./www/index.html')
// console.log(res) ;//false
// 2.异步
// fs.exists('./www/w1.txt',function(res){
//     console.log(res);//true
// })

// 四、添加（日志）
// 1.同步
// var res = fs.appendFileSync('./www/log.txt','\n 这是添加的内容'+new Date(),'utf8')
// console.log(res)
// 2.异步
// fs.appendFile('./www/log.txt','\n 这是异步的数据' + new Date(),function(err){
//     if(err){
//         console.log('添加失败');
//         throw err;
//     }
//     console.log('添加成功')
// })


// 五、监听文件是否发生改变
fs.watchFile('./www/t1.txt',function(a,b){
    console.log(a)
console.log(a.size);
// console.log(b)
})