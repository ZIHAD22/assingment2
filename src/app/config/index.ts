import dotEnv from "dotenv";
import path from "path";

dotEnv.config({ path: path.join((process.cwd, ".env")) });

const dbUrl = process.env.DB_URL;
const port = process.env.PORT;

export { dbUrl, port };
