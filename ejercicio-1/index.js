function calcurarArea(){
    const base = document.getElementById("baseInput").value;
    const altura = document.getElementById("alturaInput").value;
    if(base && altura){
        const resultado = base * altura;
        document.getElementById("resultadoInput").value = resultado;
    }
    else{
        alert("Ingrese ambos valores");
    }
}

function limpiarFormulario(){
    base = document.getElementById("baseInput").value = "";
    altura = document.getElementById("alturaInput").value = "";
    resultado = document.getElementById("resultadoInput").value= "";    
}