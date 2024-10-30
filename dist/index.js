"use strict";
let edad = 20;
let nombre = 'Pedro';
const estado = true;
let numeros = [1, 4, 5];
numeros = [6, 7];
let nombres = ['Juan', 'Pedro', -13];
let valor = 'Hola';
valor = 6;
function sumar(a, b) {
    return a + b;
}
function error(msg) {
    throw new Error(msg);
}
let nulo = null;
let indefinida = undefined;
let identificador = 'xx';
identificador = 66;
let state = 'Activo';
state = 'Inactivo';
state = 'Pendiente';
//state = 'cosa'
console.log(edad);
const producto = {
    nombre: 'ordenador',
    precio: 2400,
    stock: true
};
const jugadores = [
    { nombre: 'Pepe', ptos: 33 },
    { nombre: 'Ana', ptos: 22 },
    { nombre: 'Luis', ptos: 44 }
];
const product = {
    name: 'ordenador',
    price: 2400,
    stock: true,
    direccion: {
        street: 'hispanidad',
        number: 33
    },
    discountCalculate: function xxx(dto) { return this.price || 0 * dto; }
};
//product.name= 'Portatil'
