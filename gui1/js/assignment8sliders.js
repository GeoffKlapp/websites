/*
  File: http://geoffklapp.github.io/websites/gui1/js/assignment8sliders.js
  Geoff Klapproth, UMass Lowell Computer Science alumni,
  geoffrey_klapproth@student.uml.edu or geoffklapproth@gmail.com
  Created on 11/5/15
  Assignment 8 jQuery file to initialize and use UI sliders
*/

$(
  function() {
    
    /* This section initializes all "slider___" fields on the multiplicationTableForm form and converts them into a slider */
    $('#sliderRowStart').slider({
      value: 1, //Same starting value as the number spinner in the form
      min: 1,
      max: 50,
      step: 1,
      slide: function(event, ui) {
        $('#rowStart').val(ui.value); //Updates the value in the field to reflect the slider
        buildTable(); //Calls the buildTable() function whenever the handle is dragged around
      }
    });

    $('#sliderRowEnd').slider({
      value: 1, //Same starting value as the number spinner in the form
      min: 1,
      max: 50,
      step: 1,
      slide: function(event, ui) {
        $('#rowEnd').val(ui.value); //Updates the value in the field to reflect the slider
        buildTable(); //Calls the buildTable() function whenever the handle is dragged around
      }
    });

    $('#sliderColStart').slider({
      value: 1, //Same starting value as the number spinner in the form
      min: 1,
      max: 50,
      step: 1,
      slide: function(event, ui) {
        $('#colStart').val(ui.value); //Updates the value in the field to reflect the slider
        buildTable(); //Calls the buildTable() function whenever the handle is dragged around
      }
    });

    $('#sliderColEnd').slider({
      value: 1, //Same starting value as the number spinner in the form
      min: 1,
      max: 50,
      step: 1,
      slide: function(event, ui) {
        $('#colEnd').val(ui.value); //Updates the value in the field to reflect the slider
        buildTable(); //Calls the buildTable() function whenever the handle is dragged around
      }
    });
    
    /* This section monitors the input fields and changes the slider accordingly to match the field */
    $('#rowStart').change(
      function(){
        $('#sliderRowStart').slider( "option", "value", $('#rowStart').val() );
        buildTable();
      }
    );
    
    $('#rowEnd').change(
      function(){
        $('#sliderRowEnd').slider( "option", "value", $('#rowEnd').val() );
        buildTable();
      }
    );
    
    $('#colStart').change(
      function(){
        $('#sliderColStart').slider( "option", "value", $('#colStart').val() );
        buildTable();
      }
    );    
    
    $('#colEnd').change(
      function(){
        $('#sliderColEnd').slider( "option", "value", $('#colEnd').val() );
        buildTable();
      }
    );    
    
  }
)
