import { Distancia } from "./distancia.js";

export class Yarda extends Distancia {
    constructor(valor) {
        super(valor);
        this.nombre = "yardas";
    }
  
    convertirA(valor) {
        return valor / 91.44;
    }
}