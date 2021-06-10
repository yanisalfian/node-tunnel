var config = {
    username: "USERNAME",
    password: "USERPASSWORD",
    host: "Destination host",
    port: 22,
    dstHost: "127.0.0.1",
    dstPort: 3306,
    localPort: 3356,
    keepAlive: true
}

console.log(config);

var tunnel = require("tunnel-ssh");
var tnl = tunnel(config, function(error, tnl){
    if(error) console.log(error);
    console.log('connected')
})

process.on('beforeExit', function() {
    console.log('close')
    tnl.close();
})