const express = require("express");
const routes = require("./routes");
const server = express();

server.use(express.json());

server.use("/", routes);

server.listen(8080, () => {
  console.log("NodeJs is listening your fairytales in port 8080");
});
