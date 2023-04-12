import { Temperatura } from "./temperatura.js";

export class Fahrenheit extends Temperatura {
    constructor(valor) {
        super(valor);
        this.nombre = "fahrenheit";
    }
  
    convertirA(valor) {
        return (valor * 1.8) + 32;
    }
}