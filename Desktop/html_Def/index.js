import express from "express";

const app = express();
const port = 5500;

app.use("/", express.static("public"));

app.listen(port, console.log("http://localhost:" + port));
