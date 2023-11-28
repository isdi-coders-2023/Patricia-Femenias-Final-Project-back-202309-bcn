import morgan from "morgan";
import express from "express";
import cors from "cors";
import app from "./app.js";
import {
  generalError,
  notFoundError,
} from "./middlewares/errors/errorsMiddlewares.js";
import pingRouter from "../features/ping/router/pingRouter.js";
import furbysRouter from "../features/furby/router/furbysRouter.js";

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
app.use("/", pingRouter);
app.use("/furbys", furbysRouter);

app.use(notFoundError);
app.use(generalError);
