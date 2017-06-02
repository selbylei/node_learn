/**
 * Created by selbylei on 17/5/29.
 */

const net = require('net');
const netpkg = require('./netpkg');
const PORT = 6080;
const HOST = '127.0.0.1';
const socket = net.connect({
    port: PORT,
    host: HOST
}, function () { //连接成功调用方法
    console.log("connect to server");
});

//连接成功后执行函数
socket.on("connect", function () {
    console.log("connect success");
    //发送封包数据
    // socket.write(netpkg.package_data("Hello!"));
    // socket.write(netpkg.test_package_two_action("Hello","World"));
    //前后两次收到包的情况
    var buf_set = netpkg.test_pkg_two_slice("Bla", "ke");
    socket.write(buf_set[0]);
    setTimeout(function () {
        socket.write(buf_set[1]);
    }, 5000);
});

//socket错误调用
socket.on("error", function (e) {
    console.log(e);
});
//结束时调用
socket.on("end", function () {

});

//socket关闭事件
socket.on("close", function () {

});

//接受到数据事件
socket.on("data", function (data) {
    console.log(data);
});