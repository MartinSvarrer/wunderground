var getAndStoreData = require("./getWeatherData");

console.log("STARTING...");

console.log("REQUESTING INITIAL DATA...");
getAndStoreData();

var halfHour = 1800000;

console.log("REQUESTING DATA EVERY:", halfHour / 1000 / 60, "minutes");

setInterval(function () {
  getAndStoreData();
}, halfHour);