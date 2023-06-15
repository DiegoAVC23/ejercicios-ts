interface Alumno {
    nombre: string;
    carrera: string;
    parcial: string;
    calificaciones: number[];
    promedioMinimo: number;
}

const alumnoss: Alumno = {
    nombre:'Jesus',
    carrera:'Ing Sistemas',
    parcial:'Segundo',
    calificaciones: [78, 56, 43, 67, 70],
    promedioMinimo: 70
}
// const {nombre,carrera} = alumno;
// const alumno2: Alumno = {
//     nombre:'Diego',
//     carrera:'Ing Sistemas',
//     parcial:'Segundo',
//     calificaciones: [76, 55, 42, 100, ],
//     promedioMinimo: 70
// }




//crear una funcion que se encargue de calcular el promedio del alumno y retornara un mensaje (debe de recibir el objeto completo)
//mencionando el promedio actual y si esta aprobado o no en el parcial 
// Alumno: Jesus, Promedio: ??, Parcial: segundo, Carrera: ??, AProbado: ??
// const calcularPromedioLambda = ({calificaciones, carrera, nombre, parcial, promedioMinimo}: Alumno): string => {
//     const promedio = calificaciones.reduce((acumulador, currentValue) => acumulador + currentValue, 0) / calificaciones.length;
//     return `Alumno: ${nombre}, Promedio: ${promedio} Parcial: ${parcial}, Carrera: ${carrera}, AProbado: ${(promedio >= promedioMinimo) ? 'si': 'no'}`;
// }

// let respuesta = calcularPromedioLambda(alumno);

// console.log(respuesta);
const Calificaciones = ({calificaciones, carrera, nombre, parcial, promedioMinimo}:Alumno) =>{
    const promedio = calificaciones.reduce((acumulador, currentValue) => acumulador + currentValue, 0) / calificaciones.length;
    return `Alumno: ${nombre}, Promedio: ${promedio} Parcial: ${parcial}, Carrera: ${carrera}, AProbado: ${(promedio >= promedioMinimo) ? 'si': 'no'}`;
}
let res = Calificaciones(alumnoss);
console.log(res);