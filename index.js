import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

const handleProfile = (req, res) => {};

app.get("/", (req, res) => {
  console.log("Home");
  res.send("Wetube");
});

app.get("/profile", (req, res) => {
  console.log("Profile");
  res.send("You are on profile page.");
});
app.listen(PORT, handleListening);
