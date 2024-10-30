class Persona {
    public nombre: string
    edad: number
    esEstudiante: boolean

    constructor(nombre: string, edad: number) {
        this.nombre = nombre
        this.edad = edad
        this.esEstudiante = false
    }

    saludar() {
        console.log(`Hola soy ${this.nombre}`)
    }
}

let juan = new Persona('Juan', 30)
juan.saludar()


interface Arañador{
    arañar():void
}
interface Volador{
    volar():void
}
abstract class Animal {
    nombre: string
    constructor(nombre: string) {
        this.nombre = nombre
    }
    abstract sonar(): void
}

class Perro extends Animal{
    constructor(nombre:string){
        super(nombre)
    }
    sonar(){
        console.log('guau')
    }
}
class Gato extends Animal implements Arañador{
    constructor(nombre:string){
        super(nombre)
    }
    sonar(){
        console.log('miau')
    }
    arañar(): void {
        console.log('te estoy arañando suave')
    }
}
class Paloma extends Animal implements Volador{
    constructor(nombre:string){
        super(nombre)
    }
    sonar(){
        console.log('ru ru')
    }
    volar(): void {
        console.log('vuelo por el aire')
    }
}

const firulais = new Perro('Firu')
const michi = new Gato('Michi')
const palomico= new Paloma('Paolo')
function castrar(animal:Animal){

}
function lanzarPorAcantilado(animal:Volador){

}
castrar(firulais)
lanzarPorAcantilado(palomico)
let mascota:Animal
mascota= michi