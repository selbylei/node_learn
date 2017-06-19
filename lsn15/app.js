/**
 * Created by selbylei on 17/6/16.
 * fs模块的同步和异步读写
 */

var fs = require('fs');

//同步
// fs.mkdirSync("sync_1");

//异步
// if (fs.existsSync("async_1")) {
//     console.log("async_1 is exists");
//     fs.rename("async_1","new_async_1",(err)=>{
//         if(err){
//             console.log(err);
//         }else {
//             console.log("rename async_1=>new_async_1");
//         }
//     })
// } else {
//     fs.mkdir("async_1", function (err) {
//         if (err) {
//             console.log(err);
//         }
//     });
// }
//
// //文件传输
// fs.stat('./hello.txt',function (err,stat) {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(stat);
// });

//读文件
//异步
// fs.readFile("./hello.txt",(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// });
// //同步
// var data = fs.readFileSync("./hello.txt");
// console.log(data);
//
//
// let doSth = new Promise((resolve,reject)=>{
//     console.log('hello');
//     resolve();
// });
//
// doSth.then(()=>{
//     console.log('over');
// });

/**
 *  path
 *  flags
 *  mode
 *  callback
 */
fs.open("./hello.txt", "r",  (err, fd)=> {
    if (err) {
        console.log(err);
        return;
    }
    fs.fstat(fd, function (err, stat) {
        var buf = Buffer.allocUnsafe(stat.size);
        fs.read(fd, buf, 0, stat.size, null, function (err) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(buf);
        })
    })
});

fs.writeFile("world.txt",'world',function (err) {
    if (err){
        console.log(err);
    }
});

fs.open("./hello.txt","a",function (err,fd) {
    if (err){
        console.log(err);
    }
    fs.write(fd,"world",function (err) {
        fs.close(fd);
    })
});

