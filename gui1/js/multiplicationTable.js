/*
  File: http://geoffklapp.github.io/websites/gui1/js/multiplicationTable.js
  Geoff Klapproth, UMass Lowell Computer Science alumni,
  geoffrey_klapproth@student.uml.edu or geoffklapproth@gmail.com
  Created on 11/5/15
  Assignment 7 .js file hosting jQuery and Javascript functions
*/



/* 
This function is what the button in the form relies on to execute the createTable() function, 
which will populate and place the table into the multiplicationTable div. 
*/
function buildTable() {
  if( $('#form1').valid() ) {
    document.getElementById('multiplicationTable').innerHTML = createTable();
  }
  else {
    return false;
  }
}

/*
This function creates the table based on the input values from the form on the page (form1)
and appends all necessary HTML tags and data into the string variable named table, which 
houses all the text to populate the div on the page.
*/
function createTable() {
  var rowStart = Number(document.getElementById('rowMin').value);  //Gets the number value for the row minimum
  var rowEnd = Number(document.getElementById('rowMax').value);    //Gets the number value for the row maximum
  var colStart = Number(document.getElementById('colMin').value);  //Gets the number value for the col minimum
  var colEnd = Number(document.getElementById('colMax').value);    //Gets the number value for the col maximum
  var table = '<table border="1">';  //Adds the starting table tag to the string variable

    /*
    This set of for loops controls when to set a <tr> tag by first making a variable x that can be modified without
    worry, and compares it against the maximum row value that the user requested. Within that for loop, there lies 
    the second one which controls when to add a <td> tag. This operates much like the first, where a variable y is 
    set to the user's starting value so it can be incremented without worry, and y is compared against the column 
    maximum value in order to fill each element until the column ends, and a new row needs to be created or the 
    table is filled. Each <td> has the product of x and y inserted inside, which creates the multiplication results.
    */
    for( var x = rowStart; x <= rowEnd; x++ ) {
      table += '<tr>';
      for( var y = colStart; y <= colEnd; y++ ) {
        table += '<td>' + (x*y) + '</td>';
      }
      table += '</tr>';
    }
  return table + '</table>';  //Returns the string variable table that is now populated, along with the closing tag.
}

$(document).ready( function() {

  //Thanks John Oxley: http://stackoverflow.com/questions/1260984/jquery-validate-less-than
  $.validator.addMethod('lessThanEqual', function(value, element, param) {
    return this.optional(element) || parseInt(value) <= parseInt($(param).val());
  }, "");
  
  $('#form1').validate( {
    
    /*
    Defined rules for each input, where all inputs need a valid number input to build the table, and all inputs are
    required for the table to be populated.
    */
    rules: {
      rowMin: {
        min: 1,
        max: 99,
        required: true,
        digits: true,
        lessThanEqual: $('#rowMax')  //Use row maximum value to check if row minimum value is less than or equal
      },
      rowMax: {
        min: 1,
        max: 99,
        required: true,
        digits: true
      },
      colMin: {
        min: 1,
        max: 99,
        required: true,
        digits: true,
        lessThanEqual: $('#colMax')  //Use column maximum value to check if column minimum is less than or equal
      },
      colMax: {
        min: 1,
        max: 99,
        required: true,
        digits: true
      }
    },

    /*
    Custom error messages for the validator to display in the <label> tags next to the inputs should the form be 
    filled out incorrectly or have any missing data.
    */
    messages: {
      rowMin: {
        required: function() {
          return "The starting row value is required.";
        },
        digits: function() {
          return "The starting row value must be a valid integer.";
        },
        min: function() {
          return "This value must be at least 1.";
        },
        lessThanEqual: function() {
          return "This value must be less than the ending row value.";
        },
        max: function() {
          return "This value must be no more than 99."
        }
      },

      rowMax: {
        required: function() {
          return "The ending row value is required.";
        },
        digits: function() {
          return "The ending row value must be a valid integer.";
        },
        min: function() {
          return "This value must be at least 1.";
        },
        max: function() {
          return "This value must be no more than 99."
        }
      },

      colMin: {
        required: function() {
          return "The starting column value is required.";
        },
        digits: function() {
          return "The starting column value must be a valid integer.";
        },
        min: function() {
          return "This value must be at least 1.";
        },
        lessThanEqual: function() {
          return "This value must be less than the ending column value."
        },
        max: function() {
          return "This value must be no more than 99."
        }
      },

      colMax: {
        required: function() {
          return "The ending column value is required.";
        },
        digits: function() {
          return "The ending column value must be a valid integer.";
        },
        min: function() {
          return "This value must be at least 1.";
        },
        max: function() {
          return "This value must be no more than 99."
        }
      }

    }

    });
    
  $(#sliderRowMin).slider({
    value: 1,
    min: 1,
    max: 99,
    step: 5,
    slide: function( event, ui ) {
      $(#rowMin).val( "$" + ui.value );
    }
  });
  $( "#rowMin" ).val( "$" + $( "#sliderRowMin" ).slider( "value" ) );

  $(#sliderRowMax).slider({
    value: 1,
    min: 1,
    max: 99,
    step: 5,
    slide: function( event, ui ) {
      $(#rowMax).val( "$" + ui.value );
    }
  });
  $( "#rowMax" ).val( "$" + $( "#sliderRowMax" ).slider( "value" ) );

  $(#sliderColMin).slider({
    value: 1,
    min: 1,
    max: 99,
    step: 5,
    slide: function( event, ui ) {
      $(#colMin).val( "$" + ui.value );
    }
  });
  $( "#colMin" ).val( "$" + $( "#sliderColMin" ).slider( "value" ) );

  $(#sliderColMax).slider({
    value: 1,
    min: 1,
    max: 99,
    step: 5,
    slide: function( event, ui ) {
      $(#colMax).val( "$" + ui.value );
    }
  });
  $( "#colMax" ).val( "$" + $( "#sliderColMax" ).slider( "value" ) );
  
});
