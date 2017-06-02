/**
 * Created by selbylei on 17/5/29.
 */
const ws = require('ws');

//创建一个客户端的socket，然后让这个客户端去连接服务器端的socket
var socket = new ws("ws://127.0.0.1:6080");

//客户端启动
socket.on("open",function () {
    console.log("connect success!!!!!");
    for(var i=0;i<4;i++){
        socket.send("hello world");
    }
});
//客户端error监听
socket.on("error",function (err) {
    console.log(err);
});
//客户端信息，监听
socket.on("message",function (data) {
    console.log(data);
});

socket.on("close",function () {
    console.log("close");
});