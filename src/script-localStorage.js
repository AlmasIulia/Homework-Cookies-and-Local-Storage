var radioButtons = document.getElementsByName("temperature");

//read an item from local storage
var savedTemperatureLocalStorage = localStorage.getItem("temperature");
for (var i = 0; i < radioButtons.length; i++) {
  var radioElement = radioButtons[i];

  //preselect the radio button whose value equals the one saved in local storage
  if (radioElement.value === savedTemperatureLocalStorage) {
    radioElement.checked = "checked";
  }
  radioElement.addEventListener("click", function(event) {
    //save the value of the radio button in local storage
    //write an item in local storage
    localStorage.setItem("temperature", event.target.value);
  });
}

getWeather().then(function(apiResponse) {
  var button = document.getElementById("getWeatherButton");
  button.addEventListener("click", function() {
    var p = document.getElementById("temperature");
    if (savedTemperatureLocalStorage === "C") {
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
