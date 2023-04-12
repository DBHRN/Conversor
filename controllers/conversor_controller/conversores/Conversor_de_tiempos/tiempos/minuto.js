import { Tiempo } from "./tiempo.js";

export class Minuto extends Tiempo {
    constructor(valor) {
        super(valor);
        this.nombre = "minutos";
    }
  
    convertirA(valor) {
        console.log(valor);
        return valor / 60;
    }
}