import { Tiempo } from "./tiempo.js";

export class Segundo extends Tiempo {
    constructor(valor) {
        super(valor);
        this.nombre = "segundos";
    }

    convertirASegundos(tipo) {
        switch (tipo) {
            case "milisegundos":
                return this.valor / 1000;
            case "segundos":
                return this.valor;
            case "minutos":
                return this.valor * 60;
            case "horas":
                return this.valor * 3600;
        }
    }
}