require("dotenv").config();
/** 
 CONFIGURATIONS
*/
const PORT = process.env.PORT || 8080;

const express = require("express");
const weatherController = require("./controller/weatherController")
  .weatherController;

const app = express();

const weatherRouter = express.Router();
app.use("/api/v1/weather", weatherRouter);

/**
 * passed weatherRouter in weatherController so that sub routes
 * can be registered in weatherController
 */
weatherController(weatherRouter);

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
