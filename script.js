var minNumber = 220;
var maxNumber = 240;

var datum = new Date();
var heute = datum.getDate()+ "." + (datum.getMonth()+ 1)+ "." + datum.getFullYear();

var spannung = randomNumberFromRange(minNumber, maxNumber);
var strom = randomNumberFromRange(0, parseInt(document.getElementById("maxstrom").innerHTML) + 5);


function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function validateInput(val) {
    return /[A-Z]{2}\d{2}/i.test(val);
}

//JQuery
$( document ).ready(function() {
		$("#spannung").html(spannung);
		$("#strom").html(strom);
    if(strom > parseInt(document.getElementById("maxstrom").innerHTML)){
      $("#warnung").css("display", "block");
    }
    $("#btnAblesen").click(function(){
      var val = $("input[name=nutzerkennung]").val();
      if (validateInput(val)) {
          $('#tableAblesen').append('<tr><td>' + $("input[name=nutzerkennung]").val() + '</td><td>' + $("input[name=verbrauchswert]").val() + '</td><td>' + heute +'</td></tr>');
      } else {
        $("#btnAblesen").after('<p id="fehlermeldung">' + "Falsche Nutzerkennung! Die Nutzerkennung muss aus den Initialen Ihres Namens und den letzten beiden Ziffern Ihrer Matrikelnummer bestehen" + '</p>')
        console.log();
      }
    });

});
