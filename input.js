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

module.exports = { setupInput };

