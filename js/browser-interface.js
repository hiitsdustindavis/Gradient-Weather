var conversions = require('./../js/js-week1-moreapi.js');
var apiKey = "e5513cc23974a5b6b95ef7d24df4ce96";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showCity').text(city);
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city  + '&appid=' + apiKey).then(function(response) {
      console.log(response);
      $('.showHumidity').text("Humidity: " + response.main.humidity + "%");//show humidity

      var faren = conversions.kelvinToFaren(response.main.temp);//show temp in F
      $('.showTemperature').html(faren + "&deg;F");
      console.log("temp to faren: " + faren);

      var color = conversions.tempToColor(faren);//change color of body
    });


  });
});
