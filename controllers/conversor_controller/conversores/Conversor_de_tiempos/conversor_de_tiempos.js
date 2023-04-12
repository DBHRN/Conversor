import { Conversor } from "../conversor.js";
import { Hora } from "./tiempos/Hora.js";
import { Minuto } from "./tiempos/minuto.js";
import { Segundo } from "./tiempos/segundo.js";
import { Milisegundo } from "./tiempos/milisegundo.js";

export class ConversorDeTiempos extends Conversor{

    nombres = ["horas", "minutos", "segundos", "milisegundos"];
    tiempos = [];

    constructor(valor, nombre, destino) {
        super(valor, nombre, destino);
        this.hora = new Hora(valor);
        this.minuto = new Minuto(valor);
        this.segundo = new Segundo(valor);
        this.milisegundo = new Milisegundo(valor);
        this.tiempos.push(this.hora, this.minuto, this.segundo, this.milisegundo);
    }
    convertirAComun(nombre) {
        return this.segundo.convertirASegundos(nombre);
    }
    convertirA(destino) {
        return super.convertirA(destino, this.tiempos);
    }
    ejecucion() {
        this.valor = this.convertirAComun(this.nombre);
        if (this.destino == "segundos") {
            return this.valor;
        } else {
        return super.ejecucion(this.tiempos);
        }
    }
}