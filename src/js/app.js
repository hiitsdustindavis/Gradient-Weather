(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var output;

exports.kelvinToFaren = function(input) {
  var output = Math.round(input * (9/5) - 459.67);
  return output;
};

exports.tempToColor = function (output) {
  if (output <= 40) {
    $('body').removeClass();
    $('body').addClass('temp-low');
  } else if(  41 <= output && output <= 75) {
    $('body').removeClass();
    $('body').addClass('temp-med');
  } else {
    $('body').removeClass();
    $('body').addClass('temp-high');
  }
};

},{}],2:[function(require,module,exports){
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

},{"./../js/js-week1-moreapi.js":1}]},{},[2]);
