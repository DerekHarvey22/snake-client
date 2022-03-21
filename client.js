const net = require("net");

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
  
};
// handle user input will specify what happens when "data" is received from stdin
const handleUserInput = function (stdin) {
  if (stdin === '\u0003') {
  process.exit();
}
};

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541
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

console.log("Connecting ...");
connect();

module.exports = connect;
module.exports = handleUserInput;
module.exports = setupInput;

