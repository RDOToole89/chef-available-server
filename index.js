const cors = require("cors");
const express = require("express");
const authRouter = require("./routers/authorization");
const app = express();
const PORT = process.env.PORT || 4000;

// MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res, next) => {
  res.json("Hello World");
});

// Routers
app.use("/", authRouter);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
