function toggleForm() {  
    const shape = document.getElementById('shapeSelector').value;  
    document.getElementById('coneForm').style.display = shape === 'cone' ? 'block' : 'none';  
    document.getElementById('cylinderForm').style.display = shape === 'cilindro' ? 'block' : 'none';  
    // Limpa resultados ao mudar a forma  
    document.getElementById('coneResult').innerHTML = '';  
    document.getElementById('cylinderResult').innerHTML = '';  
    // Limpa os valores dos campos  
    document.getElementById('coneRadius').value = '';  
    document.getElementById('coneHeight').value = '';  
    document.getElementById('cylinderRadius').value = '';  
    document.getElementById('cylinderHeight').value = '';  
}  