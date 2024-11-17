const mongoose = require("mongoose");
console.log(process.env.URI)
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
