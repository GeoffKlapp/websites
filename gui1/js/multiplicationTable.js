function createTable() {
  var rowStart = Number(document.getElementById('rowMin').value);
  var rowEnd = Number(document.getElementById('rowMax').value);
  var colStart = Number(document.getElementById('colMin').value);
  var colEnd = Number(document.getElementById('colMax').value);
  var table = '<table border="1">';

    for( var x = rowStart; x <= rowEnd; x++ ) {
      table += '<tr>';
      for( var y = colStart; y <= colEnd; y++ ) {
        table += '<td>' + (x*y) + '</td>';
      }
        table += '</tr>';
      }
      return table + '</table>';
    }

function buildTable() {
  if( $('#form1').valid ) {
    document.getElementById('multiplicationTable').innerHTML = createTable();
  }
}

$(document).ready( function() {

  $('#form1').validate( {
    rules: {
      rowMin: {
        required: true,
        number: true
      },
      rowMax: {
        required: true,
        number: true
      },
      colMin: {
        required: true,
        number: true
      },
      colMax: {
        required: true,
        number: true
      }
    },

    messages: {
      rowMin: {
        required: function() {
          return "The starting row value is required.";
        },
        number: function() {
          return "The starting row value must be a valid number.";
        }
      },

      rowMax: {
        required: function() {
          return "The ending row value is required.";
        },
        number: function() {
          return "The ending row value must be a valid number.";
        }
      },

      colMin: {
        required: function() {
          return "The starting column value is required.";
        },
        number: function() {
          return "The starting column value must be a valid number.";
        }
      },

      colMax: {
        required: function() {
          return "The ending column value is required.";
        },
        number: function() {
          return "The ending column value must be a valid number.";
        }
      }

    }

    });
  });
