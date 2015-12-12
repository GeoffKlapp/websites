/*
  File: http://geoffklapp.github.io/websites/gui1/js/assignment8sliders.js
  Geoff Klapproth, UMass Lowell Computer Science alumni,
  geoffrey_klapproth@student.uml.edu or geoffklapproth@gmail.com
  Created on 11/5/15
  Assignment 8 jQuery file to initialize and use UI sliders
*/
$(
  function() {
    $('#sliderRowStart').slider({
      value: 1,
      min: 1,
      max: 20,
      step: 1,
      slide: function(event, ui) {
        $('#rowStart').val(ui.value);
      }
    });

    $('#sliderRowEnd').slider({
      value: 1,
      min: 1,
      max: 20,
      step: 1,
      slide: function(event, ui) {
        $('#rowEnd').val(ui.value);
      }
    });

    $('#sliderColStart').slider({
      value: 1,
      min: 1,
      max: 20,
      step: 1,
      slide: function(event, ui) {
        $('#colStart').val(ui.value);
      }
    });

    $('#sliderColEnd').slider({
      value: 1,
      min: 1,
      max: 20,
      step: 1,
      slide: function(event, ui) {
        $('#colEnd').val(ui.value);
      }
    });
  }
)
