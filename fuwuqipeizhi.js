// 引入node第三方框架引入
// 1）npm init //初始化
// 2）npm install express --save 拉取第三方包

var express = require("express"); //引入一个模块
var path =  require("path");//处理文件路径操作
var bodyparser = require('body-parser');//引入 主要用来处理body传参
// 创建服务器
var app =  express();//实例化对象


app.use(bodyparser.json());//对传过来的json参数进行处理
app.use(bodyparser.urlencoded({extended:false}));//解密的操作

// 2.客户端请求时以路径a进行请求，并且是以get方式发送过来的请求，就执行后面的回调函数
app.get('/a',function(req,res){ //get
    // 返回数据（可以返回字符串，json，文件等）
    // res.status(200).send('这是get回来的数据');//1.字符串  把服务器端的数据发给客户端 (status(200)为状态码，可以不写（默认200）；send:发送
    //2.json数据
    var stu  = {name:"www",age:20};
    // res.status(200).json(stu);
    res.status(200).json({
        success:true,obj:stu
    })
});

app.post('/b',function(req,res){ //post
   res.status(200).send("这是post的数据")
});

app.all('/d',function(req,res){ //post/get
    res.status(200).send("这是post/get的数据")
});


//路由传参
var stuArr = [
    {name:"www",age:10},
    {name:"rr",age:20},
    {name:"tt",age:30},
];
app.get('/c/:id',function(req,res){
     var id = req.params.id;
     // console.log(id)
    if(id>=0 && id<stuArr.length){
        var info = stuArr[id]; //将穿过来的下表对应数组下边 并返回给前端
        res.status(200).json({success:true,msg:'', obj:info})
    }else {
        res.status(200).json({success:false,msg:'查无此人', obj:{}})
    }
});


// body传参
// 1.下载第三方包  npm install body-parser --save (主要用来处理body传参)
// 2. 引入 var bodyparser = require('body-parser')
// 3.模块化 // app.use(bodyparser.json());//对传过来的json参数进行处理
            // app.use(bodyparser.urlencoded({extended:false}));//解密的操作

app.post('/e',function(req,res){
    var name = req.body.name;
    var age = req.body.age
    var info = {
        name:name,
        age:age
    }

    if(name&&age){ //判断参数是否为空
        stuArr.unshift(info);  //把传过来的值添加到数组的头部
        res.status(200).json({success:true,msg:"添加成功",obj:stuArr})
    }else {
        res.status(200).json({success:false,msg:"添加失败",obj:{}})
    }

})



//index.html默认的访问页面,静态目录
app.use(express.static(path.join(__dirname,'www')));
// console.log(path.join(__dirname,'www')) ; //E:\node\www 当前文件的物理路径

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