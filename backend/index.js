import express, { response } from "express";
import { PORT } from "./config.js";

const app = express();

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Working Sucessfully");
});

app.listen(PORT, () => {
  console.log(`App is Running on Port ${PORT}`);
});
