import { Conversor } from "../conversor.js";
import { Centigrado } from "./temperaturas/centigrado.js";
import { Fahrenheit } from "./temperaturas/fahrenheit.js";
import { Kelvin } from "./temperaturas/kelvin.js";

export class ConversorDeTemperaturas extends Conversor {

    nombres = ["centigrados", "fahrenheit", "kelvin"];
    temperaturas = [];

    constructor(valor, nombre, destino) {
        super(valor, nombre, destino);
        this.centigrado = new Centigrado(valor);
        this.fahrenheit = new Fahrenheit(valor);
        this.kelvin = new Kelvin(valor);
        this.temperaturas.push(this.centigrado, this.fahrenheit, this.kelvin);
    }
    convertirAComun(nombre) {
        return this.centigrado.convertirACentigrados(nombre);
    }
    convertirA(destino) {
        return super.convertirA(destino, this.temperaturas);
    }
    ejecucion() {
        console.log(this.valor);
        this.valor = this.convertirAComun(this.nombre);
        console.log(this.valor);
        if (this.destino == "centigrados") {
            return this.valor;
        } else {
        return super.ejecucion(this.temperaturas);
        }
    }
}