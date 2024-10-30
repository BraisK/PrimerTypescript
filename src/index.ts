let edad:number = 20

let nombre = 'Pedro'

const estado:boolean = true

let numeros:number[] = [1,4,5]

numeros = [6,7]

let nombres:[string,string,number] = ['Juan', 'Pedro', -13]


let valor:any = 'Hola'
valor=6

function sumar(a:number,b:number):number{
    return a+b
}

function error(msg:string):never{
    throw new Error(msg)
}

let nulo:null = null
let indefinida:undefined = undefined

let identificador: string | number = 'xx'
identificador = 66

let state:'Activo' | 'Inactivo' | 'Pendiente' = 'Activo'
state = 'Inactivo'
state = 'Pendiente'
//state = 'cosa'

console.log(edad) 

const producto:{nombre:string,precio:number,stock:boolean} = {
    nombre: 'ordenador',
    precio: 2400,
    stock: true
}

const jugadores: {nombre:string,ptos:number}[]
= [
    {nombre:'Pepe', ptos:33},
    {nombre:'Ana', ptos:22},
    {nombre:'Luis', ptos:44}
]

interface Direccion{
    street: string
    number: number
}

interface Producto{
    readonly name: string
    // readonly para que no se puedea modificar
    price?: number
    // ? para poner que es opcional
    stock: boolean
    direccion: Direccion,
    discountCalculate(dto:number): number
}

const product:Producto = {
    name: 'ordenador',
    price: 2400,
    stock: true,
    direccion:{
        street:'hispanidad',
        number:33        
    },
    discountCalculate: function xxx(dto) {return this.price || 0 *dto}

}
//product.name= 'Portatil'