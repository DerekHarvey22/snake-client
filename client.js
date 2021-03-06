const net = require("net");
const {IP, PORT} = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // added code to handle incoming data from the server
  conn.on('data', (data) => {
    console.log(data);
  });
  // print message when connection is established
  conn.on('connect', () => {
    console.log("Successfully connected to the game server")
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    conn.write('Name: DHP');
  });

    //send the string move: up as data to the server via the conn object
    //conn.on('connect', () => {
      //conn.write('Move: up')
    //})


  return conn;
};



module.exports = { connect };


