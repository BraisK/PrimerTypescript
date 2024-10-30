"use strict";
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.esEstudiante = false;
    }
    saludar() {
        console.log(`Hola soy ${this.nombre}`);
    }
}
let juan = new Persona('Juan', 30);
juan.saludar();
