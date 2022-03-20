const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // updated connect function to print message when connection closes
  conn.on("closes", ()=> {
    console.log("you ded cuz you died");
  })

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;