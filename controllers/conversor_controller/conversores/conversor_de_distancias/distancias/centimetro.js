import { Distancia } from "./distancia.js";

export class Centimetro extends Distancia {
    constructor(valor) {
        super(valor);
        this.nombre = "centimetro";
    }

    convertirACentimetros(tipo) {
        switch (tipo) {
            case "kilometros":
                return this.valor * 100000;
            case "metros":
                return this.valor * 100;
            case "centimetros":
                return this.valor;
            case "milimetros":
                return this.valor / 10;
        }
    }
}