import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => {
  console.log(`Listening on: http://localhost:${PORT}`);
};

app.use((req, res, next) => {
  console.log("I'm between");
  next();
});

app.get("/", (req, res) => {
  console.log("Home");
  res.send("Wetube");
});

app.get("/profile", (req, res) => {
  console.log("Profile");
  res.send("You are on profile page.");
});

app.listen(PORT, handleListening);
