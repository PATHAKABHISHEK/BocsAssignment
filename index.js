/** 
 CONFIGURATIONS
*/
const PORT = process.env.PORT || 3000;

const express = require("express");
const app = express();

const weatherRouter = express.Router();
app.use("/api/v1/weather", weatherRouter);

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
