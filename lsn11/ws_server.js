/**
 * Created by selbylei on 17/5/29.
 */
//load websocket module
const ws = require('ws');

//开启
var server = new ws.Server({
    host:"127.0.0.1",
    port:6080,
});

//client_sock是一个服务端的socket
function websocket_add_listen(client_sock) {

    client_sock.on("close",function () {
        console.log("client close");
    });
    client_sock.on("message",function (data) {
        console.log(data);
        client_sock.send("Thank you");
    });

    client_sock.on("error",function (err) {
        console.log(err);
    });

}

function on_server_client_comming(client_sock) {
    websocket_add_listen(client_sock);
  }
function on_server_listen_error(err) {
    console.log(err);
}

function on_server_headers(data) {
    console.log(data);
}
//connect event; 客户端接入进来
server.on("connection",on_server_client_comming);
//error 错误事件；
server.on("error",on_server_listen_error);
//headers事件，拿到我们回给客户端的字符
server.on("headers",on_server_headers);