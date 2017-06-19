/**
 * Created by selbylei on 17/6/10.
 */
// console.log(process.memoryUsage());


//弱引用WeakMap
// const wm = new WeakMap();
// const element = document.getElementById('example');
// wm.set(element, 'some  information');
// wm.get(element);


//reduce数组运算
var arr = [0, 23, 32, 22];
var sum = (a, b) => a + b;
console.log(arr.reduce(sum, 100));


//reduce实现map
var arr1 = [1, 2, 3, 4];
var handler = function (arr, x) {
    arr.push(x + 1);
    return arr;
};
const newArr = arr1.reduce(handler, []);
console.log(newArr);


//map对每个item进行操作，生成一个新的数组
var arr3 = [1, 2, 3, 4];
var plusOne = x => x + 1;
arr3.map(plusOne);
console.log(arr3.map(plusOne));

var demo = [234, 3434, 2323];
var fuc = function (result, item) {
    if (item > 300) {
        result.push(true);
    } else {
        result.push(false);
    }
    return result;
};

var v = demo.reduce(fuc, []);
console.log(v);


var czpengs = [1, 2, 10, 7];
var plusOne = function (x, y, z) {
    console.log("x--"+x);
    console.log("y--"+y);
    console.log("z--"+z);
    return z;
}
var pengs = czpengs.map(plusOne); // [2, 3, 4, 5]
console.log(pengs);


var bx = x=>x+1;
var append = function (newArr,x) {
    newArr.push(x);
};
//plusOne是变形操作，append是累积操作
R.transduce(R.map(plusOne), append, [], arr);

