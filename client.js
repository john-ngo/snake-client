const net = require("net");

const host = "165.227.47.243";
const port = "50541"
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host, // IP address here,
    port // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", message => {
    // code that does something when the connection is first established
    console.log(message);
  });

  return conn;
};

module.exports = { connect };