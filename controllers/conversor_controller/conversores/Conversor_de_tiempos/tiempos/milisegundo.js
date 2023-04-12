import { Tiempo } from "./tiempo.js";

export class Milisegundo extends Tiempo {
    constructor(valor) {
        super(valor);
        this.nombre = "milisegundos";
    }
  
    convertirA(valor) {
        return valor * 1000;
    }
}