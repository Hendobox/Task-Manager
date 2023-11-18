const mongoose = require("mongoose");
require("dotenv").config();

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

async function mongoConnect() {
  await mongoose.connect(process.env.DATABASE_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
