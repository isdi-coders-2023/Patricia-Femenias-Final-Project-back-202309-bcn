import { Schema, model } from "mongoose";
import { type FurbyStructure } from "../types";

const FurbySchema = new Schema<FurbyStructure>({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  generation: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  howFoundIt: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Furby = model("Furby", FurbySchema, "furbys");

export default Furby;
