/**
 * Created by selbylei on 17/5/27.
 */

//分配内存，赋初值，默认为0
var buf1 = Buffer.alloc(10, "hello");
console.log(buf1);

//分配内存，不赋初值
//unsafe是没有初始化的内存
var buf2 = Buffer.allocUnsafe(10);
console.log(buf2);

//分配内存，不从缓存池分配,没有初始化
var buf3 = Buffer.allocUnsafeSlow(10);
console.log(buf3);

//创建一个Buffer，来自数组
var buf4 = Buffer.from([1, 2, 3, 9]);
console.log(buf4);

//创建一个buffer，拷贝一个buffer值
var buf5 = Buffer.from(buf4);
console.log(buf4);
//创建一个Buffer，来自string
var buf6 = Buffer.from("selbylei");
console.log(buf6);

//获取buffer的长度，buffer的长度分配之后，不能改变
console.log(buf4.length);


//访问Buffer  Buffer[index]
console.log(buf6[0]);

//读写
const buffer = Buffer.allocUnsafe(10);
console.log(buffer);
//以大尾的形式存放4个字节的整数
buffer.writeInt32LE(65535, 0);
console.log(buffer);
buffer.writeInt32BE(65535, 0);
console.log(buffer);

var value = buffer.readInt32BE(0);
console.log(value);

buffer.writeDoubleBE(3.14, 0);
console.log(buffer);
console.log(buffer.readDoubleBE(0));

//存放一个string需要多少长度的内存
console.log(Buffer.byteLength("selbylei"));

const buf7 = Buffer.alloc(4 * 4);
buf7.writeInt32LE(65535,0);
buf7.writeInt32LE(65535,4);
buf7.writeInt32LE(65535,8);
buf7.writeInt32LE(65535,12);
console.log(buf7);
//大小尾替换
buf7.swap32();
console.log(buf7);
console.log(buf7.readInt32BE(0));

for(var v of buf7.values()){
    console.log(v);
}
//二进制根据编码答应
console.log(buf7.toString('hex'));
console.log(buf7.toJSON());
console.log(JSON.stringify(buf7));
