import { Dinero } from "./dinero.js";
export class PesoMexicano extends Dinero {
    constructor(valor) {
        super(valor);
        this.nombre = "pesos";
        this.simbolo = "$";
    }
  
    convertirA(valor) {
        return valor * 18.16;
    }
}