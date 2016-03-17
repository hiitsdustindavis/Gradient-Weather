var apiKey = "e5513cc23974a5b6b95ef7d24df4ce96";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then.fadeIn(function(response) {
      $('.showHumidity').text((response.main.humidity));
    });
  });
});
