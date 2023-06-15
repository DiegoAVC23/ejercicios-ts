type PerimetroArea = {
    area: number,
    perimetro:number
}
export const areayPerimetroCuadrado = (lado:number):PerimetroArea =>{
    let area = lado* lado;
    let perimetro = lado * 4;
    return {area,perimetro}
}
export const areayPerimetroCirculo = (radio:number):PerimetroArea =>{
    let area = Math.PI * Math.pow(radio,2) ;
    let perimetro = 2 * Math.PI * radio;
    return {area,perimetro}
}
export const areayPerimetroTriangulo = (base:number, altura:number=5):PerimetroArea =>{
    let area = base * altura/2 ;
    let perimetro = base+base+base;
    return {area,perimetro}
}
// export const areayPerimetroCirculo = (radio:number):PerimetroArea =>{
//     let area = Math.PI * Math.pow(radio,2) ;
//     let perimetro = 2 * Math.PI * radio;
//     return {area,perimetro}
// }

// export const areayPerimetro = (circunferencia:number):circulo =>{
//     let area = 3.1416 * Math.pow(cir)
//     return {}
// }
