/**
 * Created by selbylei on 17/6/20.
 */
var redis = require('redis');
//noinspection JSAnnotator
RDS_PORT = 6379,
RDS_HOST = '127.0.0.1',
RDS_OPTS = {auth_pass: ""},
client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);

client.on('ready', function (res) {
    console.log("ready");
});


client.on('connect',function () {
    // client.hmset('short', {'js':'javascript','C#':'C Sharp'}, redis.print);
    // client.hmset('short', 'SQL','Structured Query Language','HTML','HyperText Mark-up Language', redis.print);
    //
    // client.hgetall("short", function(err,res){
    //     if(err)
    //     {
    //         console.log('Error:'+ err);
    //         return;
    //     }
    //     console.dir(res);
    // });


    // client.hmset('user',{name:'selbylei',age:30},redis.print);
    // client.hgetall('user',function (err,res) {
    //     if(err){
    //         console.log('Error:'+err);
    //         return;
    //     }
    //     console.log(res);
    // })

    client.sadd(key, 'C#','java',redis.print);
    client.sadd(key, 'nodejs');
    client.sadd(key, "MySQL");

    client.multi()
        .sismember(key,'C#')
        .smembers(key)
        .exec(function (err, replies) {
            console.log("MULTI got " + replies.length + " replies");
            replies.forEach(function (reply, index) {
                console.log("Reply " + index + ": " + reply.toString());
            });
            client.quit();
        });
})

