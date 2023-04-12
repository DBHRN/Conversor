import { Temperatura } from "./temperatura.js";

export class Kelvin extends Temperatura {
    constructor(valor) {
        super(valor);
        this.nombre = "kelvin";
    }
  
    convertirA(valor) {
        valor = parseFloat(valor) + 273.15;
        return valor;
    }
}