import { Distancia } from "./distancia.js";

export class Kilometro extends Distancia {
    constructor(valor) {
        super(valor);
        this.nombre = "kilometros";
    }
  
    convertirA(valor) {
        return valor / 100000;
    }
}