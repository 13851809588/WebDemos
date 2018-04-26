//Custom add
  var menuJson=[{
      "name": "用户管理",
      "controller":"#",
      "child": [{
          "name": "用户概览",
          "controller":"user/home.html",
      },{
          "name": "添加用户",
          "controller":"user/add.html",
      }]
  },{
      "name": "文章管理",
      "controller":"#",
      "child": [{
          "name": "文章概览",
          "controller":"post/home.html",
      },{
          "name": "添加文章",
          "controller":"post/add.html",
      }]
  },{
      "name": "文章管理2",
      "controller":"#",
      "child": [{
          "name": "文章概览",
          "controller":"post/home.html",
      },{
          "name": "添加文章",
          "controller":"post/add.html",
      }]
  }];
  
//js调用java方法参考:https://www.cnblogs.com/shirandedan/p/7727326.html
// var menuJson;
// function getUserFunc(){
//     $.ajax({
//         type: 'GET',
//         url: "getUserAllFunction",
//         cache: false,
//         async : false,
//         // headers : {
//         //     'Content-Type' : 'application/json;charset=utf-8'
//         // },
//         // data: JSON.stringify(menuJson),
//         dataType: 'json',
//         success: function (result) {
//             console.log("获取用户所有功能成功");
//             console.log("result "+JSON.stringify(result));
//             menuJson = result;
//         },
//         error: function (result, XMLHttpRequest, textStatus, errorThrown) {
//             console.log("获取用户所有功能失败");
//             console.log("result "+JSON.stringify(result));
//             console.log("menuJson "+menuJson);
//             console.log("JSON.stringify(obj) "+JSON.stringify(menuJson));
//             // 状态码
//             // console.log(XMLHttpRequest.status);
//             // console.log(XMLHttpRequest.toLocaleString());
//             // 状态
//             // console.log(XMLHttpRequest.readyState);
//             // 错误信息
//             // console.log(textStatus);
//         }
//     });
//     return menuJson;
// }
//Ajax全局变量赋值参考： https://blog.csdn.net/gzp444280620/article/details/70922224
// 启动计时器
// console.time('testForEach');
// menuJson = getUserFunc();
// console.timeEnd('testForEach');
  
  
  function menuInit() {
      var menu = null;
      var html = null;
      var chidLen = null;
      var child = null;
      for (var i = 0; i < menuJson.length; i++) {
          menu = menuJson[i];
          //if(i==0){
          //    html = $(' <li menu-id="' + i + '" class="active treeview "><li>');
          //}else{
          //    html = $(' <li menu-id="' + i + '" class="treeview "><li>');
          //}
		  
		  html = $(' <li menu-id="' + i + '" class="treeview "><li>');

          $(".sidebar .sidebar-menu").append(html);

          html = $(' <a href="'+menu.controller+'"> <i class="fa fa-dashboard"></i> <span>'+menu.name+'</span> <span class="pull-right-container"> <i class="fa fa-angle-left pull-right"></i> </span> </a> <ul menuUl-id="'+i+'" class="treeview-menu"> </ul>');
          $('[menu-id="'+i+'"]').append(html);

          chidLen = menu.child.length;
          for (var j=0;j<chidLen;j++){
              child = menu.child[j];
              if(i==0&&j==0){
                  html = $('<li class="active"><a href="javascript:void(0);" menu-controller="'+child.controller+'"><i class="fa fa-circle-o"></i> '+child.name+'</a></li>');
              }else{
                  html = $('<li class=""><a href="javascript:void(0);" menu-controller="'+child.controller+'"><i class="fa fa-circle-o"></i> '+child.name+'</a></li>');
              }

              $('[menuUl-id="'+i+'"]').append(html);
          }
      }
      $(Selector.data).each(function () {
          Plugin.call($(this))
      })
      $(".sidebar-menu li:first ul li:first a").click();
  }
  
  menuInit();