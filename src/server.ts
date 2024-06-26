import mongoose from "mongoose";
import app from "./app";
import { dbUrl, port } from "./app/config";

async function main() {
  await mongoose.connect(dbUrl as string);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main();
