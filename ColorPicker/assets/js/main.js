$(document).ready(function() {
  var baseColor = "#123456";
  var accentColor = "#dddddd";

  $('#bgbase').css("fill", baseColor);
  $('#bgrect1').css("fill", accentColor);
  $('#bgrect2').css("fill", accentColor);
  $('#bgrect3').css("fill", accentColor);

  $('#colorPickerBase').spectrum({
    preferredFormat: "rgb",
    type: "component",
    showAlpha: false,
    allowEmpty: false,
    color: "#123456",
    move: function(color) {
      baseColor = color;
      $('#bgbase').css("fill", baseColor);
    },
    appendTo: "#cpHolder1"
  });

  $('#colorPickerAccent').spectrum({
    preferredFormat: "rgb",
    type: "component",
    showAlpha: false,
    allowEmpty: false,
    color: "#dddddd",
    move: function(color) {
      accentColor = color;
      $('#bgrect1').css("fill", accentColor);
      $('#bgrect2').css("fill", accentColor);
      $('#bgrect3').css("fill", accentColor);
    },
    appendTo: "#cpHolder2"
  });


});
