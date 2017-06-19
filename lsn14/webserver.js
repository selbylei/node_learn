/**
 * Created by selbylei on 17/6/14.
 */
var express = require('express');
//工作目录
var path = require('path');

var app = express();
//设置静态网页地址
app.use(express.static(path.join(process.cwd(), "www_root")));
app.listen(6080);

app.get("login",function (require,respons) {
    respons.send("success");
});


