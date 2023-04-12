import { Conversor } from "../conversor.js";
import { Kilometro } from "./distancias/kilometro.js";
import {Metro} from "./distancias/metro.js";
import {Centimetro} from "./distancias/centimetro.js";
import {Milimetro} from "./distancias/milimetro.js";

export class ConversorDeDistancias extends Conversor {

    nombres = ["kilometros", "metros", "centimetros", "milimetros"];
    distancias = [];

    constructor(valor, nombre, destino) {
        super(valor, nombre, destino);
        this.kilometro = new Kilometro(valor);
        this.metro = new Metro(valor);
        this.centimetro = new Centimetro(valor);
        this.milimetro = new Milimetro(valor);
        this.distancias.push(this.kilometro, this.metro, this.centimetro, this.milimetro);
    }
    convertirAComun(nombre) {
        return this.centimetro.convertirACentimetros(nombre);
    }
    convertirA(destino) {
        return super.convertirA(destino, this.distancias);
    }
    ejecucion() {
        this.valor = this.convertirAComun(this.nombre);
        if (this.destino == "centimetros") {
            return this.valor;
        } else {
        return super.ejecucion(this.distancias);
        }
    }
}