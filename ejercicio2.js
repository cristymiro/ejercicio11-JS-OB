/**
 
En este segundo ejercicio tendréis que crear dos clases:

Circulo

Rectángulo

las cuales deben de heredar de Figura.

Circulo debe recibir dos parámetros en el constructor: radio (number) y color (String).

Rectángulo debe recibir tres parámetros en el constructor: base (number), altura (number) y color (String).

Los atributos de estas clases deben ser públicos.
 */

class Figura{
    constructor(color){
        this.color = color;
    }
    imprimir(){
        document.write(`Color: ${this.color}<br>`)
    }

}

const figura1 = new Figura('red');
console.log(figura1);
figura1.imprimir();
document.write('<hr>');


class Circulo extends Figura{
    constructor(color,radio){
        super(color);
        this.radio = radio;
    }
    imprimir(){
        super.imprimir();
        document.write(`Radio: ${this.radio}`)
    }
}

const circulo1 = new Circulo('red',3);
console.log(circulo1)
circulo1.imprimir();
document.write('<hr>');


class Rectangulo extends Figura{
    constructor(color,base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }
    imprimir(){
        super.imprimir();
        document.write(`Base: ${this.base} <br> Altura: ${this.altura}`)
    }
}

const rectangulo1 = new Rectangulo('red',3,6);
console.log(rectangulo1)
rectangulo1.imprimir();