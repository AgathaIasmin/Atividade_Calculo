export default class Cilindro{
    constructor(raio, altura){
        this.raio = raio
        this.altura = altura
    }
    calcularArea(){
        return (2 * Math.PI * raio * altura) + (2 * Math.PI * Math.sqrt(raio, 2))
    }
    calcularVolume(){
        return Math.PI * Math.pow(raio, 2) * altura
    }
}