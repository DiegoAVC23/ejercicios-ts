type AreayPerimetro = {
    area: number,
    perimetro: number,
}

export const AreayPerimetroCuadrado = (lado:number):AreayPerimetro=>{
    let area = lado*4;
    let perimetro = lado*2
    return{area,perimetro} 
}

// export const AreayPerimetroTriangulo (lado:number):AreayPerimetro=>{

// }