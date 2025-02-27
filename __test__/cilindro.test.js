import Cilindro from "../Model/Cilindro"
describe("testando funções cilindro",()=>{
    test("testando calcular area", ()=>{
        const raio = 2
        const altura = 5
        const areaEsperada = (2 * Math.PI * raio * altura) + (2 * Math.PI * Math.sqrt(raio, 2))
        const cilindro = new Cilindro(raio, altura)
        expect(cilindro.calcularArea()).toBeCloseTo(areaEsperada,2)
        console.log(areaEsperada)
    })
    test("testando calcular volume", ()=>{
        const raio = 2
        const altura = 5
        const volumeEsperado = Math.PI * Math.pow(raio, 2) * altura
        const cilindro = new Cilindro(raio, altura)
        expect(cilindro.calcularVolume()).toBeCloseTo(volumeEsperado,2)
        console.log(volumeEsperado)
    })
})