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

const port = process.env.PORT ?? 4000;
const frontUrl = process.env.FRONT_URL!;

app.use(morgan("dev"));

app.use(
  cors({
    origin: [frontUrl],
  }),
);

app.use(express.json());

app.use("/", pingRouter);

app.use("/furbys", furbysRouter);

app.use(notFoundError);

app.use(generalError);
