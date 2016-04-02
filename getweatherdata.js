var request = require("request"),
  fs = require("fs");

var key = fs.readFileSync("wunderground_key").toString();

var getAndStoreData = function () {
    request("http://api.wunderground.com/api/" + key +"/conditions/q/DK/Copenhagen.json",
      function(error, response, body) {
        var json = JSON.parse(body);

        var currentTempC = json.current_observation.temp_c;
        var obsTime = json.current_observation.observation_time_rfc822;
        var relHumid = json.current_observation.relative_humidity;

        var weather_data = {
          "temp_c": currentTempC,
          "relative_humidity": relHumid
        };


        // load json fil.
        fs.readFile('./db.json', (err, data) => {
          if (err) throw err;

          var json = JSON.parse(data);
          json[obsTime] = weather_data;

          // gemme json fil.
          fs.writeFile("./db.json", JSON.stringify(json), (err) => {
            if (err) throw err;
            console.log('It\'s saved!');
          });
        });
      });
  }

module.exports = getAndStoreData;