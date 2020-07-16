var http = require('http'); //创建服务器

var fs = require('fs'); //文件(引入一个模块

var path = require('path');  //处理文件路径操作

//创建服务
                            //req表示服务器要请求的变量，res表示服务器要返回的变量
var myServer = http.createServer(function(req,res){
    // console.log(req);
    // console.log(res);
    // 如果req.url == '/' 则返回 index文件 。否则返回当前页面的路径
    // var myUrl = req.url == '/' ? './view/index.html' : './view' + req.url; //获取地址
    // console.log(myUrl)
    // //3.判断文件是否存在（存在则返回页面，不存在则返回404页面错误信息）
    // if(fs.existsSync(myUrl)){
    //     var html = fs.readFileSync(myUrl); //1.读取页面(同步)
    //     res.write(html);  //2.返回页面
    // }else{
    //     var errHtml = fs.readFileSync('./view/err/404err.html');
    //     res.write(errHtml)
    // }

    // 封装后
    //如果req.url == '/' 则返回 index文件 。否则返回当前页面的路径
    var myUrl = req.url == '/' ? 'index.html' : req.url; //获取地址
    console.log("reqUrl:"+req.url); // /info.html
    console.log('url:'+myUrl); // /info.html
    var myPath = path.join('view',myUrl); // 把字符串连接成一个路径
    console.log("path:"+myPath); // view\info.html
    //3.判断文件是否存在（存在则返回页面，不存在则返回404页面错误信息）
    if(fs.existsSync(myPath)){
        var html = fs.readFileSync(myPath); //1.读取页面(同步)
        res.write(html);  //2.返回页面
    }else{
        var myPath = path.join('view','err','404err.html')
        var errHtml = fs.readFileSync(myPath); //读取页面(同步)
        res.write(errHtml)  //返回页面
    }


    res.end();//结束操作
})
// 对创建的服务进行监听
myServer.listen('3000',function(err){
    if(err){
        console.log("监听失败");
        throw err;
    }
    console.log("服务器已开启，端口号为：3000")
})