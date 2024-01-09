/**
 * npm init
 * npm install express
 * npm install mongoose
 * npm install dotenv
 * npm install nodemon
 *
 */

require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//const middlewares = require("./utils/middlewares");
const phonebooksRouter = require("./routes/phonebook");

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGODB_URI);

app.use(express.json());
//app.use(middlewares.logger);
//app.use(middlewares.attachCurrentuser);
app.use(express.static("build"));
app.use(cors());

app.use("/phonebook", phonebooksRouter);

//app.use(middlewares.errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
