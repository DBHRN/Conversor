import { Dinero } from "./dinero.js";

export class Euro extends Dinero {
    constructor(valor) {
        super(valor);
        this.nombre = "euros";
        this.simbolo = "€";
    }
  
    convertirA(valor) {
        return valor * 0.92;
    }
}