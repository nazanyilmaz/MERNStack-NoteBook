const express = require("express");
require("dotenv").config();
const notRoute = require("./routes/notes");
const mongoose = require("mongoose");

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);

  next();
});

app.use(express.json());

app.use("/api/notes", notRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB conection");
    app.listen(process.env.PORT, () => {
      console.log(`Servet running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
