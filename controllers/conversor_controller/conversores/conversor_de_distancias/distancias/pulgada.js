import { Distancia } from "./distancia.js";

export class Pulgada extends Distancia {
    constructor(valor) {
        super(valor);
        this.nombre = "pulgadas";
    }
  
    convertirA(valor) {
        return valor / 2.54;
    }
}