import mongoose from "mongoose";
import createDebug from "debug";
import chalk from "chalk";

const debug = createDebug("furbys:database");

const connectToDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
    mongoose.set("debug", true);
    debug(chalk.green("Connected to database"));
  } catch (error) {
    debug(chalk.red("Not possible to connect to database"));
  }
};

export default connectToDatabase;
