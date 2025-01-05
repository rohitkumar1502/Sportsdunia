const mongoose = require("mongoose");

const uri =
  "mongodb+srv://<username>:<password>@myatlasclusteredu.cnvw2mx.mongodb.net/<dbName>?retryWrites=true&w=majority&appName=myAtlasClusterEDU";

let dbUrl = uri.replace("<username>", process.env.DB_USERNAME);
dbUrl = dbUrl.replace("<password>", process.env.DB_PASSWORD);
dbUrl = dbUrl.replace("<dbName>", process.env.DB_NAME);

mongoose
  .connect(dbUrl) // For faster DB setup, Replace with your local host mongodb url in dbURL and comment above line
  .then(() => {
    console.log("------------ DB is connected -------------");
  })
  .catch((err) => {
    console.error(err);
    console.log("-------- Error in DB connection --------\n");
    console.log(err);
    process.exit(1);
  });
