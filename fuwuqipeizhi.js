// 引入node第三方框架引入
// 1）npm init //初始化
// 2）npm install express --save 拉取第三方包

var express = require("express"); //引入一个模块
var path =  require("path");//处理文件路径操作

// 创建服务器
var app =  express();//实例化对象


//index.html默认的访问页面,静态目录
app.use(express.static(path.join(__dirname,'www')));
console.log(path.join(__dirname,'www')) ; //E:\node\www 当前文件的物理路径

app.use('/detail',function(req,res){ //当访问的路径是 detail时  把list文件返回回去
    res.sendFile(path.join(__dirname,'www','list.html')); //把文件发回到客户端
    // res.status(200).sendFile(path.join(__dirname,'www','list.html')); //把文件发回到客户端 ,status(200)可以自定义状态码
});

// 配置页面 当页面找不到是  执行以下函数
app.use("*",function(req,res){ //*可以省略不写 *表示所有路径
    res.status(200).sendFile(path.join(__dirname,'www','err','404.html'))
});


//页面请求 bower

//监听
app.listen(3000 ,function(err){
       if(err){
           console.log("监听失败");
            throw err;
       }
       console.log("服务器已开启，端口号为3000");
});