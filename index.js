const express = require("express");
const app = express();
const PORT = 4000;

// MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsMiddleWare());

app.get("/", (req, res, next) => {
  res.json("Hello World");
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
