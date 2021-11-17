require("dotenv").config();
const mongoose = require("mongoose");

// const DATABASE_URL = process.env.DATABASE_URL;
const DATABASE_URL =
  "mongodb+srv://admin:admin@cluster0.jegun.mongodb.net/podcast?retryWrites=true&w=majority";

const connectDb = () => {
  return mongoose.connect(
    DATABASE_URL,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    (err) => {
      if (err) {
        console.log("Connection error to DB");
      } else {
        console.log("Connected to DB");
      }
    }
  );
};
const db = mongoose.connection;
db.on("error", (err) => {
  console.log("error");
});
module.exports = connectDb;
