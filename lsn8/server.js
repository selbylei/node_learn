/**
 * Created by selbylei on 17/5/26.
 */
const net = require('net');
const PORT = 6080;
const HOST = '127.0.0.1';
//创建一个server
//socket        与客户端通讯的socket
const server = net.createServer(function (client_socket) {

    const address =  client_socket.remoteAddress;
    const port = client_socket.remotePort;
    console.log(address+":"+port+"用户接入");
    //设置接受数据的编码
    //"utf8"    "hex"二进制
    // client_socket.setEncoding('hex');
    client_socket.setEncoding('utf8');

    //接受到客户端数据
    client_socket.on("data", function (data) {
        console.log("receive data: "+data);
        for(var i=0;i<4;i++){
            client_socket.write("欢迎光临");
        }
        client_socket.end(); //服务器，强制关闭客户端
    });

    //接受到错误事件调用
    client_socket.on("error", function (err) {
        console.log(err);
    });


    //连接断开
    client_socket.on("close", function () {
        console.log("close")
    });
});

//启动服务器监听
server.listen({
    port: PORT,
    host: HOST,
    exclusive: true,
});


server.on("close", function () {
    console.log("server close");
});

//错误发生
server.on("error", function (e) {
    console.log(e);
});

//开始监听事件
server.on("listening", function () {
    console.log(HOST + ":"+PORT+"开启监听");
});

