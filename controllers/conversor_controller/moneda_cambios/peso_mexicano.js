import { Dinero } from "./dinero.js";
export class PesoMexicano extends Dinero {
    constructor(valor) {
        super(valor);
        this.nombre = "Peso Mexicano";
        this.simbolo = "$";
    }
  
    convertirA(valor) {
        return valor * 18.16;
    }
}