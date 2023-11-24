"use strict";

function btnSumar(){
    var valor1 = document.getElementById("txtval1").value;
    var valor2 = document.getElementById("txtval2").value;
    var suma = 0;

    suma = parseInt(valor1) + parseInt(valor2);
    document.form1.txtRes.value = suma;
}
