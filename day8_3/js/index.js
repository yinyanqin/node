var myapp = angular.module('myapp',['ui.router']);
                                                               // 第一个参数对需要的路由进行配置，第二个参数对其它路由进行配置（当前面的路由不满足时，进行后面路由的配置）
myapp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    // 配置路由
    $stateProvider.state('home',{
        url:'/home',
        views:{ //视图
            head:{
                template:'<h1>头部的内容</h1>'
            },
            body:{
                templateUrl:'./views/body.main.tpl.html',
                controller:"body.main.ctrl"
            },
            food:{
                template:'<h1>页脚的内容</h1>'
            }
        }
    });


    $urlRouterProvider.otherwise('/home') ;//如果不满足时指定到home页面

}]);

myapp.controller("body.main.ctrl",[])