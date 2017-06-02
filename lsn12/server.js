/**
 * Created by selbylei on 17/5/29.
 */

const net = require('net');
const netpkg = require('./netpkg');
const PORT = 6080;
const HOST = '127.0.0.1';

var last_pkg = null;
function client_add_listen(client_socket) {

    client_socket.on("error", function (err) {
        console.log(err);
    });

    client_socket.on("data", function (data) {
        //数据拆包
        console.log(data);
        if (last_pkg != null) {
            var buf = Buffer.concat([last_pkg, data], last_pkg.length + data.length);
            last_pkg = buf;
        } else {
            last_pkg = data;
        }
        var offset = 0;
        var pkg_len = netpkg.read_pkg_size(last_pkg, offset);
        console.log(pkg_len);
        if (pkg_len < 0) {
            return;
        }
        while (offset + pkg_len <= last_pkg.length) {
            //根据长度信息来读取我们的数据，假设我们传过来的是文包数据
            var cmd_buf = Buffer.allocUnsafe(pkg_len - netpkg.count_length);
            last_pkg.copy(cmd_buf, 0, offset + netpkg.count_length, offset + pkg_len);
            console.log(cmd_buf.toString("utf8"));
            offset += pkg_len;
            if (offset >= last_pkg.length) {  //正好我们的包处理完了
                break;
            }

            pkg_len = netpkg.read_pkg_size(last_pkg, offset);
            if (pkg_len < 0) {
                break;
            }
        }

        //能处理的数据包处理完成，保存0.几个包的数据
        if (offset >= last_pkg.length) {
            last_pkg = null;
        } else {//offset到length的数据拷贝到新的Buffer里面
            var buf = Buffer.allocUnsafe(last_pkg.length - offset);
            last_pkg.copy(buf, 0, offset, last_pkg.length);
            last_pkg = buf;
        }
    });

    client_socket.on("close", function () {
        console.log("close");
    });
}


var server = net.createServer(function (client_socket) {
    client_add_listen(client_socket);
});


server.listen({
    port: PORT,
    host: HOST,
    exclusive: true
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
    console.log(HOST + ":" + PORT + "开启监听");
});