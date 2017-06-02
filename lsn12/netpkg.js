/**
 * Created by selbylei on 17/5/29.
 */
 
var netpkg = {
    
    count_length:2,
    
    init: function (lenth) {
        this.count_length = lenth;
    },
    //获取包的长度
    read_pkg_size: function (pkg_data, offset) {
        if (offset > pkg_data.length - this.count_length) { //没办法获取长度信息
            return -1;
        }
        var len = pkg_data.readUInt16LE(offset);
        return len;
    },

    //封包
    package_data: function (data) {
        var buf = Buffer.allocUnsafe(this.count_length + data.length);
        buf.writeUInt16LE(this.count_length + data.length, 0);
        buf.fill(data, this.count_length);
        return buf;
    },

    //发送2个数据包
    test_package_two_action: function (action1, action2) {
        var buf = Buffer.allocUnsafe(4 + action1.length + action2.length);
        buf.writeInt16LE(this.count_length + action1.length, 0);
        buf.fill(action1, this.count_length);
        var offset = this.count_length + action1.length;
        buf.writeInt16LE(this.count_length + action2.length, offset);
        buf.fill(action2, offset + this.count_length);
        return buf;
    },
    //一个大的数据，分两次发送到客户端；
    test_pkg_two_slice: function (half_cmd1, half_cmd2) {
        var buf1 = Buffer.allocUnsafe(this.count_length + half_cmd1.length);
        buf1.writeInt16LE(this.count_length + half_cmd1.length + half_cmd2.length, 0);
        buf1.fill(half_cmd1, this.count_length);

        var buf2 = Buffer.allocUnsafe(half_cmd2.length);
        buf2.fill(half_cmd2);

        console.log(buf1.toString("utf8"));
        console.log(buf2.toString("utf8"));
        return [buf1, buf2];
    }
};

module.exports = netpkg;