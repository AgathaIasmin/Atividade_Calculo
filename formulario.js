function alternarEntradas() {  
    let formaElement = document.getElementById("formaSelector"),   
        inputs = document.getElementById("inputs"),   
        resultados = document.getElementById("resultados");   

    if (formaElement.value) {  
        inputs.style.display = "block";   
        resultados.style.display = "none";   

        document.getElementById('formCone').style.display = (formaElement.value === 'cone') ? 'block' : 'none';   
        document.getElementById('formCilindro').style.display = (formaElement.value === 'cilindro') ? 'block' : 'none';   
    } else {  
        inputs.style.display = "none";   
        resultados.style.display = "none";   
    }  
}  