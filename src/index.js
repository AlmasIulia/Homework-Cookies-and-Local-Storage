function getCookiesAsObject() {
  //save the cookie string in a variable
  var cookieString = document.cookie;

  //transform from string to array of key=value strings
  var cookiesArray = cookieString.split("; ");

  var result = {};
  for (var i = 0; i < cookiesArray.length; i++) {
    var cookieElement = cookiesArray[i];

    var cookiesDataArray = cookieElement.split("=");

    var cookieName = cookiesDataArray[0];
    var cookieValue = cookiesDataArray[1];

    result[cookieName] = cookieValue;
  }
  //need to return the result to be able to use it outside the function
  return result;
}
var cookieObject = getCookiesAsObject();

const radios = document.getElementsByName("temperature");
// console.log("radio buttons", radios);

var savedTemperatureCookie = cookieObject.temperature;
console.log("saved temperature", savedTemperatureCookie);

for (var i = 0; i < radios.length; i++) {
  var radioElement = radios[i];
  //if the value of the radio button equals the saved language cookie, preselect it
  if (radioElement.value === savedTemperatureCookie) {
    radioElement.checked = "checked";
  }
  radioElement.addEventListener("click", function(event) {
    //event.target = the radio button that we clicked
    document.cookie = "temperature=" + event.target.value;
  });
}

const weatherApiURL =
  "https://api.wunderground.com/api/86c20099e2a92264/conditions/q/RO/Cluj-Napoca.json";

getWeather().then(function(apiResponse) {
  var button = document.getElementById("getWeatherButton");
  button.addEventListener("click", function() {
    var p = document.getElementById("temperature");
    if (savedTemperatureCookie === "C") {
      p.innerText =
        "The temperature in Cluj is " +
        apiResponse.current_observation.feelslike_c +
        "°C";
    } else {
      p.innerText =
        "The temperature in Cluj is " +
        apiResponse.current_observation.feelslike_f +
        "°F";
    }
  });
});
