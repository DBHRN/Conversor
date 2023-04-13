import { Distancia } from "./distancia.js";

export class Pie extends Distancia {
    constructor(valor) {
        super(valor);
        this.nombre = "pies";
    }
  
    convertirA(valor) {
        return valor / 30.48;
    }
}