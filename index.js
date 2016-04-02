var getAndStoreData = require("./getWeatherData");

getAndStoreData();

var halfHour = 1800000;

setInterval(function () {
  getAndStoreData();
}, halfHour);