const convertToCelsius = function(Ftemperature) {
  let ctemperature = (Ftemperature-32)*0.555555556;
  return Math.round(ctemperature*10)/10;
};

const convertToFahrenheit = function(Ctemperature) {
  let ftemperature =(Ctemperature*1.8)+32;
  return Math.round(ftemperature*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
