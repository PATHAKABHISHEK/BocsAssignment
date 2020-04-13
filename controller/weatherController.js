require("dotenv").config();

const request = require("request");

class WeatherController {
  constructor(weatherRouter) {
    this.weatherRouter = weatherRouter;
    this.registerRoutes();
  }

  // This method register routes of WeatherController
  registerRoutes() {
    this.weatherRouter.get(
      "/current_weather_data",
      this.getCurrentWeatherData.bind(this)
    );
  }

  // This api gets current weather data based on latitude and longitude paramters passed
  getCurrentWeatherData(req, res, next) {
    let lat = req.query.lat;
    let lon = req.query.lon;
    let responseObject = {
      weatherData: null,
      errorMessage: null,
    };
    if (lat && lon) {
      request(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`,
        function (error, response, body) {
          if (error) {
            responseObject.errorMessage =
              "Sorry for Inconvenience, Unable to Fetch Data.";
            res.send(responseObject);
          } else if (response.statusCode === 200) {
            responseObject.weatherData = JSON.parse(body);
            res.send(responseObject);
          }
        }
      );
    } else {
      responseObject.errorMessage =
        "Provide Both lat and lon query paramaters.";
      res.send(responseObject);
    }
  }
}

/**
 * Helper method for accessing Weather Controller Class
 */
const weatherController = (weatherRouter) => {
  return new WeatherController(weatherRouter);
};

module.exports = {
  weatherController,
};
