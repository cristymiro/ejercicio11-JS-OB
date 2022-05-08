/*

Como último ejercicio, tendréis que crear un método calcularArea() en la clase Figura que devuelva el valor -1 para indicar que nuestra figura genérica no tiene área.

Implementa ese mismo método en las clases Circulo y Rectángulo que devuelvan el área de la figura en base a sus atributos.

Para calcular el área del círculo, PI puede ser 3.14 simplemente, sin más decimales.
*/





class Figura {
    constructor (altura, base) {
      this.altura = altura;
      this.base = base;
    }
    // Getter
    get area() {
       return this.calcularArea();
     }
    // Método
    calcularArea () {
      return this.altura * this.base;
    }
  }
  
  const figura1 = new Figura(10,5)
    console.log(figura1.area)

    

    class Circulo{
        constructor(radio){
            this.radio = radio;
        }
        get area() {
            return this.calcularArea();
          }

        calcularArea (){
            return this.radio * Math.PI * 2;
        }
    }

const circulo1 = new Circulo(2);
console.log(circulo1.area);

class Rectangulo{
    constructor(base,altura){
        this.base = base;
        this.altura = altura;
    }
    get area() {
        return this.calcularArea();
      }
      calcularArea(){
          return this.base * this.altura;
      }

}

const rectangulo1 = new Rectangulo(5,10);
console.log(rectangulo1.area);