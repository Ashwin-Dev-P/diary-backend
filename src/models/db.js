const mongoose = require("mongoose");

const USE_MONGODB_ATLAS = process.env.USE_MONGODB_ATLAS;
const DB_NAME = process.env.DB_NAME;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_USERNAME = process.env.MONGODB_USERNAME;

//Setting up the required URI for the database
var uri;
if (USE_MONGODB_ATLAS === true || process.env.NODE_ENV === "production") {
  //Uses mongodb atlas cloud service
  uri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@mycluster.gi2hp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
} else {
  //Uses mongodb compass localhost storage
  uri = `mongodb://localhost:27017/${DB_NAME}`;
}

//Function to check if the database is connected
const db_connect = (error) => {
  if (error) {
    console.error("Error connecting to the database");
    console.error(error);
  } else {
    console.log("Connected to database");
  }
};

mongoose.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  db_connect
);
