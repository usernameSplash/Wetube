const express = require("express");
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

app.get("/", function(req, res) {
  res.send("Wetube");
});
app.listen(PORT, handleListening);
