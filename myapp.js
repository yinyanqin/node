var http = require('http');

var fs = require('fs');

var path = require('path');

//创建服务
                            //req表示服务器要请求的变量，res表示服务器要返回的变量
var myServer = http.createServer(function(req,res){
    // console.log(req);
    // console.log(res);

    // var myUrl = req.url == '/' ? './view/index.html' : './view' + req.url; //获取地址
    // console.log(myUrl)
    // //判断文件是否存在
    // if(fs.existsSync(myUrl)){
    //     var html = fs.readFileSync(myUrl); //读取页面
    //     res.write(html);  //返回页面
    // }else{
    //     var errHtml = fs.readFileSync('./view/err/404err.html');
    //     res.write(errHtml)
    // }



    var myUrl = req.url == '/' ? 'index.html' : req.url; //获取地址
    console.log("reqUrl:"+req.url)
    console.log('url:'+myUrl);
    var myPath = path.join('view',myUrl);
    console.log("path:"+myPath);
    //判断文件是否存在
    if(fs.existsSync(myPath)){
        var html = fs.readFileSync(myPath); //读取页面
        res.write(html);  //返回页面
    }else{
        var myPath = path.join('view','err','404err.html')
        var errHtml = fs.readFileSync(myPath);
        res.write(errHtml)
    }


    res.end();//结束操作
})
// 监听
myServer.listen('3000',function(err){
    if(err){
        console.log("监听失败");
        throw err;
    }
    console.log("服务器已开启，端口号为：3000")
})