import { Distancia } from "./distancia.js";

export class Metro extends Distancia {
    constructor(valor) {
        super(valor);
        this.nombre = "metros";
    }
  
    convertirA(valor) {
        return valor / 100;
    }
}