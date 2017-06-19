/**
 * Created by selbylei on 17/6/13.
 */
const util = require('util');

// %s - 字符串。
// %d - 数值（整数或浮点数）。
// %i - Integer.
// %f - Floating point value.
// %j - JSON。如果参数包含循环引用，则用字符串 '[Circular]' 替换。
// %% - 单个百分号（'%'）。不消耗参数。
console.log(util.format("%s:%s","selbylei"));
console.log(util.format('%s:%s', 'foo', 'bar', 'baz')); // 'foo:bar baz'



const obj = { foo: '这个不会出现在 inspect() 的输出中' };
obj[util.inspect.custom] = function(depth) {
    return { bar: 'baz' };
};

console.log(util.inspect(obj));