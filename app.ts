import { areayPerimetroCuadrado, areayPerimetroCirculo, areayPerimetroTriangulo} from "./perimetros/perimetros"

const figuras = {
    circulo:{
        radio:10
    },
    triangulo:{
        base:65,
        altura:80
    },
    cuadrado:{
        lado:80
    }
}
console.log(areayPerimetroCuadrado(figuras.cuadrado.lado));
console.log(areayPerimetroCirculo(figuras.circulo.radio));
console.log(areayPerimetroTriangulo(figuras.triangulo.base));