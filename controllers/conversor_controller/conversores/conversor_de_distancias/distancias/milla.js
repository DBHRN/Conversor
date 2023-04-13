import { Distancia } from "./distancia.js";

export class Milla extends Distancia {
    constructor(valor) {
        super(valor);
        this.nombre = "millas";
    }
  
    convertirA(valor) {
        return valor / 160934;
    }
}