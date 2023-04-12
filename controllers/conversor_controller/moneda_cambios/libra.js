import { Dinero } from "./dinero.js";

export class Libra extends Dinero {
    constructor(valor) {
        super(valor);
        this.nombre = "Libra Esterlina";
        this.simbolo = "£";
    }
  
    convertirA(valor) {
        return valor * 0.81;
    }
}