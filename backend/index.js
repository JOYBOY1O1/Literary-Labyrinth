import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { mongo } from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Working Sucessfully");
});

mongoose
  .connect(mongoDBURL)
  .then((result) => {
    console.log("App Connected to the Database");
    app.listen(PORT, () => {
      console.log(`App is Running on Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
