import { Tiempo } from "./tiempo.js";

export class Hora extends Tiempo {
    constructor(valor) {
        super(valor);
        this.nombre = "horas";
    }
  
    convertirA(valor) {
        return valor / 3600;
    }
}