import { Distancia } from "./distancia.js";

export class Milimetro extends Distancia {
    constructor(valor) {
        super(valor);
        this.nombre = "milimetros";
    }
  
    convertirA(valor) {
        return valor * 10;
    }
}