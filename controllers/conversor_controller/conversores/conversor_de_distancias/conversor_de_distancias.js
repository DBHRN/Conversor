import { Conversor } from "../conversor.js";
import { Kilometro } from "./distancias/kilometro.js";
import {Metro} from "./distancias/metro.js";
import {Centimetro} from "./distancias/centimetro.js";
import {Milimetro} from "./distancias/milimetro.js";
import {Milla} from "./distancias/milla.js";
import {Yarda} from "./distancias/yarda.js";
import {Pie} from "./distancias/pie.js";
import {Pulgada} from "./distancias/pulgada.js";

export class ConversorDeDistancias extends Conversor {

    nombres = ["kilometros", "metros", "centimetros", "milimetros","millas","yardas","pies","pulgadas"];
    distancias = [];

    constructor(valor, nombre, destino) {
        super(valor, nombre, destino);
        this.kilometro = new Kilometro(valor);
        this.metro = new Metro(valor);
        this.centimetro = new Centimetro(valor);
        this.milimetro = new Milimetro(valor);
        this.milla = new Milla(valor);
        this.yarda = new Yarda(valor);
        this.pie = new Pie(valor);
        this.pulgada = new Pulgada(valor);
        this.distancias.push(this.kilometro, this.metro, this.centimetro, this.milimetro, this.milla, this.yarda, this.pie, this.pulgada);
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