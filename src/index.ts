import "dotenv/config";
import createDebug from "debug";
import chalk from "chalk";
import { startServer } from "./server/app.js";
import "./server/index.js";
import connectToDatabase from "./database/index.js";

const debug = createDebug("furbys:index");
const port = process.env.PORT ?? 4000;

if (!process.env.MONGODB_URL) {
  debug(chalk.red("Missing MONGODB Connection String"));
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await connectToDatabase(mongoUrl);

startServer(+port);
