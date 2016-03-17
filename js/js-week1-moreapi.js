var output;

exports.kelvinToFaren = function(input) {
  var output = Math.round(input * (9/5) - 459.67);
  return output;
};

exports.tempToColor = function (output) {
  if (output <= 40) {
    $('body').removeClass();
    $('body').addClass('temp-low');
  } else if(  41 <= output || output <= 75) {
    $('body').removeClass();
    $('body').addClass('temp-med');
  } else {
    $('body').removeClass();
    $('body').addClass('temp-high');
  }
};
