//To enable .env file
require("dotenv").config({ path: `./src/envs/.env.${process.env.NODE_ENV}` });

const express = require("express");
const app = express();

//Enable CORS
var cors = require("cors");
var corsOptions = {
  origin: ["localhost:4200"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

//DB connection and models
require("./src/models/index.js");

//body parser deprecation replacement
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//import routes
const routes = require("./src/routes/");
app.use(routes);

//PORT
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
app.listen(PORT, () => {
  console.log(`Server started on  port ${PORT}.`);

  if (NODE_ENV === "development") {
    console.log(`http://localhost:${PORT}`);
  }
});
