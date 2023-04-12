import { Dinero } from "./dinero.js";

export class Dolar extends Dinero {
    constructor(valor) {
        super(valor);
        this.nombre = "Dólar";
        this.simbolo = "US$";
    }

    convertirADolares(tipo) {
        switch (tipo) {
            case "dolares":
                return this.valor;
            case "pesos":
                return this.valor * 0.055;
            case "euros":
                return this.valor * 1.09;
            case "libras":
                return this.valor * 1.24;
            case "yen":
                return this.valor * 0.0075;
            case "won":
                return this.valor * 0.00076;
        }
    }
}