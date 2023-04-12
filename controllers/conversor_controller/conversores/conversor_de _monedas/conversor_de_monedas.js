import { Conversor } from "../conversor.js";
import { PesoMexicano } from "./moneda_cambios/peso_mexicano.js";
import { Dolar } from "./moneda_cambios/dolar.js";
import { Euro } from "./moneda_cambios/euro.js";
import { Libra } from "./moneda_cambios/libra.js";
import { Yen } from "./moneda_cambios/yen.js";
import { Won } from "./moneda_cambios/won.js";

export class ConversorDeMonedas extends Conversor{

    nombres = ["pesos", "dolares", "euros", "libras", "yen", "won"];
    monedas = [];

    constructor(valor, nombre, destino) {
        super(valor, nombre, destino);
        this.dolar = new Dolar(valor);
        this.euro = new Euro(valor);
        this.peso = new PesoMexicano(valor);
        this.libra = new Libra(valor);
        this.yen = new Yen(valor);
        this.won = new Won(valor);
        this.monedas.push(this.dolar, this.euro, this.peso, this.libra, this.yen, this.won);
    }
    convertirAComun(nombre) {
        return this.dolar.convertirADolares(nombre);
    }
    convertirA(destino) {
        return super.convertirA(destino, this.monedas);
    }
    ejecucion() {
        this.valor = this.convertirAComun(this.nombre);
        if (this.destino == "dolares") {
            return this.valor;
        } else {
        return super.ejecucion(this.monedas);
        }
    }
}