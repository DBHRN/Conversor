import { Dinero } from "./dinero.js";

export class Yen extends Dinero {
    constructor(valor) {
        super(valor);
        this.nombre = "Yen Japonés";
        this.simbolo = "¥";
    }
  
    convertirA(valor) {
        return valor * 133.63;
    }
}