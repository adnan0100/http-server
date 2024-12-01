const net = require("net");

const server = net.createServer((socket) => {
  socket.write("HTTP/1.1 200 OK\r\n\r\n");
  
  // Use 'end' to close the connection gracefully
  socket.end();
  
  socket.on("close", () => {
    console.log("Socket closed");
  });
});

// Start the server
server.listen(8080, () => {
  console.log("Server is running on port 8080");
  console.log("Server is running on port 8080");
  console.log("Server is running on port 8080");
});
