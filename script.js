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

//JQuery
$( document ).ready(function() {
		$("#spannung").html(spannung);
		$("#strom").html(strom);
    if(strom > parseInt(document.getElementById("maxstrom").innerHTML)){
      $("#warnung").css("display", "block");
    }
    $("#btnAblesen").click(function(){
        $('#tableAblesen').append('<tr><td>' + $("input[name=nutzerkennung]").val() + '</td><td>' + $("input[name=verbrauchswert]").val() + '</td><td>' + heute +'</td></tr>');
    });

});
