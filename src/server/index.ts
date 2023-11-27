import morgan from "morgan";
import express from "express";
import cors from "cors";
import app from "./app.js";
import PingController from "../features/ping/controller/PingController.js";
import { notFoundError } from "./middlewares/errors/errorsMiddlewares.js";

const pingController = new PingController();

app.use(morgan("dev"));
app.use(
  cors({
    origin: [
      "https://patricia-femenias-202309-bcn-back.onrender.com",
      "https://patricia-femenias-202309-bcn-back.onrender.com/furbys",
    ],
  }),
);

app.use(express.json());
app.use("/", pingController.getPong);

app.use(notFoundError);
