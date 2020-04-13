class WeatherController {
  constructor(weatherRouter) {
    this.weatherRouter = weatherRouter;
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
