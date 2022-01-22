var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i<pacientes.length; i++){

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var checkPeso = true;
    var checkAltura = true;


    if(peso<=0 || peso >=800){
        checkPeso = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if(altura<=0 || altura>=2.60){
        checkAltura = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(checkPeso && checkAltura){
        var imc = peso/(altura*altura);
        tdImc.textContent = imc.toFixed(2);
    }
}






