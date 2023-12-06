import { Joi, validate } from "express-validation";
import { type FurbyStructureWithoutId } from "../types";

const furbySchema = {
  body: Joi.object<FurbyStructureWithoutId>({
    name: Joi.string().required(),
    type: Joi.string().required(),
    year: Joi.number().required(),
    generation: Joi.number().required(),
    language: Joi.string().required(),
    price: Joi.number().required(),
    howFoundIt: Joi.string().required(),
    imageUrl: Joi.string().required(),
  }),
};

const furbyValidation = validate(furbySchema, {}, { abortEarly: false });

export default furbyValidation;
