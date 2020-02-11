const express = require("express");
const routes = express.Router();

routes.get("/nome", (req, res) => {
  return res.json({
    name: "Joao Victor"
  });
});

module.exports = routes;
