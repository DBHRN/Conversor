import { PesoMexicano } from "./moneda_cambios/peso_mexicano.js";
import { Dolar } from "./moneda_cambios/dolar.js";
import { Euro } from "./moneda_cambios/euro.js";
import { Libra } from "./moneda_cambios/libra.js";
import { Yen } from "./moneda_cambios/yen.js";
import { Won } from "./moneda_cambios/won.js";

export class Conversor {

    constructor(valor, nombre, destino) {
        this.dolar = new Dolar(valor);
        this.euro = new Euro(valor);
        this.peso = new PesoMexicano(valor);
        this.libra = new Libra(valor);
        this.yen = new Yen(valor);
        this.won = new Won(valor);
        this.nombre = nombre;
        this.destino = destino;
    }
    convertirADolares(nombre) {
        return this.dolar.convertirADolares(nombre);
    }
    convertirA(destino) {
        switch (destino) {
            case "pesos":
                return this.peso.convertirA(this.valor);
            case "euros":
                return this.euro.convertirA(this.valor);
            case "libras":
                return this.libra.convertirA(this.valor);
            case "yen":
                return this.yen.convertirA(this.valor);
            case "won":
                return this.won.convertirA(this.valor);
            case "dolares":
                return this.valor;
        }
    }
    ejecucion() {
        this.valor = this.convertirADolares(this.nombre);
        this.valor = this.convertirA(this.destino);
        return this.valor;
    }
}