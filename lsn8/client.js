/**
 * Created by selbylei on 17/5/26.
 */
const net = require('net');
const PORT = 6080;
const HOST = '127.0.0.1';

const socket = net.connect({
    port: PORT,
    host: HOST
}, function () { //连接成功调用方法
    console.log("connect to server");
 });

socket.setEncoding('utf8');

//连接成功后执行函数
socket.on("connect",function () {
    console.log("connect success");
    socket.write("HelloWorld");
});

//socket错误调用
socket.on("error",function (e) {
     console.log(e);
});
//结束时调用
socket.on("end",function () {

 });

//socket关闭事件
socket.on("close",function () {

});

//接受到数据事件
socket.on("data",function (data) {
    console.log(data);
});


