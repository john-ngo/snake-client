const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    IP, // IP address here,
    PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    
    conn.write("Name: XDN");
    // setInterval(() => conn.write("Move: up"), 50);
    // setTimeout(() => conn.write("Move: left"), 3000);
    // conn.write("Move: up");
    // conn.write("Move: left");
    // conn.write("Move: down");
    // conn.write("Move: right");
  });

  conn.on("data", message => {
    // code that does something when the connection is first established
    console.log(message);
  });

  return conn;
};

module.exports = { connect };