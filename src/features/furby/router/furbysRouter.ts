import { Router } from "express";
import FurbysController from "../controller/FurbysController.js";
import FurbysMongooseRepository from "../repository/FurbysMongooseRepository.js";
import { type FurbysRepository } from "../repository/types";

const furbysRouter = Router();

const furbysRepository: FurbysRepository = new FurbysMongooseRepository();

const furbysController = new FurbysController(furbysRepository);

furbysRouter.get("/", furbysController.getFurbys);

export default furbysRouter;
