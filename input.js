let connection;

const handleUserInput = key => {
  // your code here
  if (key === "\u0003") {
    process.exit();
  }

  switch (key) {
    case "\u0077":
      connection.write("Move: up");
      break;
    case "\u0061":
      connection.write("Move: left");
      break;
    case "\u0073":
      connection.write("Move: down");
      break;
    case "\u0064":
      connection.write("Move: right");
      break;
    case "\u0071":
      connection.write("Say: For the king!");
      break;
    case "\u0065":
      connection.write("Say: You shall not pass!");
      break;
    default:
      break;
  }
};

const setupInput = conn => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};


module.exports = { setupInput };