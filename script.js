function zufall() {
    var z = Math.random();
    z *= 20;
    z += 220;
    z = Math.floor(z);
    var spannung = document.getElementById("spannung");
    spannung.textContent = "aktuelle Spannung: " + z + " U";
    z = Math.random();
    z *= 55;
    z += 1;
    z = Math.floor(z);
    var strom = document.getElementById("strom");
    if (z > 50) {
        strom.textContent = "aktueller Strom: " + z + " A" + "   ACHTUNG ! Die maximale Belastung ist überkrass!";
    } else {
        strom.textContent = "aktueller Strom: " + z + " A";
    }
}
function ablesen() {
    var d = new Date();
    var datum = d.toISOString();
    var kwh = document.getElementById("kwh").value;
    var nutz = document.getElementById("nutz").value;
    var zeile = document.createElement("tr");
    var datumzelle = document.createElement("td");
    var kwhzelle = document.createElement("td");
    var nutzzelle = document.createElement("td");
    zeile.appendChild(datumzelle);
    zeile.appendChild(nutzzelle);
    zeile.appendChild(kwhzelle);
    document.getElementById("ablesen").appendChild(zeile);
    kwhzelle.textContent = kwh
    datumzelle.textContent = datum
    nutzzelle.textContent = nutz
}
