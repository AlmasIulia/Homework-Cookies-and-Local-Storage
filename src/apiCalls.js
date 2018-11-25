const weatherApiURL =
  "https://api.wunderground.com/api/86c20099e2a92264/conditions/q/RO/Cluj-Napoca.json";

function getWeather() {
  return $.ajax({
    url: weatherApiURL,
    method: "GET"
  });
}
