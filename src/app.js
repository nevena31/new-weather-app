function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "aa8be038534a124at608fo4af5b10b9a";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lavis&key=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
