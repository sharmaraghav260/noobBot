var tmi = require('tmi.js');

var options = {
  options: {
    debug: true
  },
  connections: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: "justatoolboxbot",
    password: "oauth:gful9y5y8gjk5hswchdkk33oqjczkb"
  },
  channels: ["justatoolbox"]
};

var client = new tmi.client(options);
client.connect();

client.on("connected", function (address, port) {
    console.log("Address: " + address + " Port: " + port);
    client.action("justatoolbox", "Hello, I am a bot for justatoolbox");
});
