import { Dinero } from "./dinero.js";

export class Won extends Dinero {
    constructor(valor) {
        super(valor);
        this.nombre = "won";
        this.simbolo = "W";
    }
  
    convertirA(valor) {
        return valor * 1320.78;
    }
  }