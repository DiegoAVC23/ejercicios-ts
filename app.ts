import { AreayPerimetroCuadrado } from "./perimetros/perimetros";

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
console.log(AreayPerimetroCuadrado(figuras.cuadrado.lado));
