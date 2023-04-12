import { Temperatura } from "./temperatura.js";

export class Centigrado extends Temperatura {
    constructor(valor) {
        super(valor);
        this.nombre = "centigrados";
    }

    convertirACentigrados(tipo) {
        switch (tipo) {
            case "centigrados":
                return this.valor;
            case "fahrenheit":
                return ((this.valor - 32) * 5) / 9;
            case "kelvin":
                return this.valor - 273.15;
        }
    }
}