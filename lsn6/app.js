
/**
 * Created by selbylei on 17/5/25.
 */


/**
 *  setTimeout
 *  插入一个事件，一定事件后执行
 */
setTimeout(function() {
    console.log("set time out");
}, 3*1000);

/**
 * 循环计时器事件，每隔一段时间执行一次
 */
setInterval(function () {
    console.log("setInterval的使用");
},3*1000);