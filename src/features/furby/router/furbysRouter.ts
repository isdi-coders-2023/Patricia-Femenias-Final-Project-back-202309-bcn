import { Router } from "express";
import FurbysController from "../controller/FurbysController.js";
import FurbysMongooseRepository from "../repository/FurbysMongooseRepository.js";
import { type FurbysRepository } from "../repository/types";
import furbyValidation from "../schema/furbySchema.js";

const furbysRouter = Router();

const furbysRepository: FurbysRepository = new FurbysMongooseRepository();
const furbysController = new FurbysController(furbysRepository);

furbysRouter.get("/", furbysController.getFurbys);
furbysRouter.delete("/:furbyId", furbysController.deleteFurby);
furbysRouter.post("/create", furbyValidation, furbysController.addFurby);
furbysRouter.get("/:furbyId", furbysController.getFurbyById);
furbysRouter.patch("/:furbyId", furbysController.modifyFurby);

export default furbysRouter;
