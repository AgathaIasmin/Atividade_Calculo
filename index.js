class Cone {  
    constructor(raio, altura) {  
        this.raio = raio;  
        this.altura = altura;  
    }  
    
    calcularArea() {  
        let areaBase = Math.PI * Math.pow(this.raio, 2);  
        let areaLateral = Math.PI * this.raio * Math.sqrt(Math.pow(this.raio, 2) + Math.pow(this.altura, 2));  
        return areaBase + areaLateral;  
    }  

    calcularVolume() {  
        return (1/3) * Math.PI * Math.pow(this.raio, 2) * this.altura;  
    }  
}  

class Cilindro {  
    constructor(raio, altura) {  
        this.raio = raio;  
        this.altura = altura;  
    }  

    calcularArea() {  
        return (2 * Math.PI * this.raio * this.altura) + (2 * Math.PI * Math.pow(this.raio, 2));
    }  

    calcularVolume() {  
        return Math.PI * Math.pow(this.raio, 2) * this.altura;  
    }  
}  

function alternarEntradas() {  
    let selector = document.getElementById('formaSelector');  
    let formaSelecionada = selector.value;  
    let formCone = document.getElementById('formCone');  
    let formCilindro = document.getElementById('formCilindro');  
    let inputsDiv = document.getElementById('inputs');  

    if (formaSelecionada === 'cone') {  
        inputsDiv.style.display = 'block';  
        formCone.style.display = 'block';  
        formCilindro.style.display = 'none';  
    } else if (formaSelecionada === 'cilindro') {  
        inputsDiv.style.display = 'block';  
        formCone.style.display = 'none';  
        formCilindro.style.display = 'block';  
    } else {  
        inputsDiv.style.display = 'none';  
    }  
}  

function calcularCone() {  
    let raio = parseFloat(document.getElementById('raioCone').value);  
    let altura = parseFloat(document.getElementById('alturaCone').value);  
    let cone = new Cone(raio, altura);  
    
    let area = cone.calcularArea();  
    let volume = cone.calcularVolume();  
    let resultadoDiv = document.getElementById('resultadoCone');  
    resultadoDiv.innerHTML = `Área: ${area.toFixed(2)} m²<br>Volume: ${volume.toFixed(2)} m³`;  
}  

function calcularCilindro() {  
    let raio = parseFloat(document.getElementById('raioCilindro').value);  
    let altura = parseFloat(document.getElementById('alturaCilindro').value);  
    let cilindro = new Cilindro(raio, altura);  
    
    let area = cilindro.calcularArea();  
    let volume = cilindro.calcularVolume();  
    let resultadoDiv = document.getElementById('resultados');  
    resultadoDiv.style.display = 'block';  
    resultadoDiv.innerHTML = `Área: ${area.toFixed(2)} m²<br>Volume: ${volume.toFixed(2)} m³`;  
}  

document.querySelector('#formCone button').onclick = calcularCone;  
document.querySelector('#formCilindro button').onclick = calcularCilindro;  
