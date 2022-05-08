//En este ejercicio tendréis que crearla clase figura que tiene que tener como atributo _color.
//El constructor de Figura debe recibir como parámetro el valor del color y almacenarlo en _color.
//Ya que la variable _color es privada, tenéis que crear un getter getColor() y un setter setColor(String).



class Figura {
    constructor() {
        this.#_color = 'red';
    }

    get color() {
        return this._color;
    }

    set color(blue) {
        this._color = blue;
    }

    imprimir() {
        document.write(this.color + '<br>');
    }
}

const color1 = new Figura();
console.log(color1)
color1.imprimir();

