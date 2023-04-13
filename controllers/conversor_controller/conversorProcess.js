import { ConversorDeMonedas } from "./conversores/conversor_de _monedas/conversor_de_monedas.js";
import { ConversorDeTemperaturas } from "./conversores/conversor_de_temperaturas/conversor_de_temperaturas.js";
import { ConversorDeTiempos } from "./conversores/Conversor_de_tiempos/conversor_de_tiempos.js";
import { ConversorDeDistancias } from "./conversores/conversor_de_distancias/conversor_de_distancias.js";

export class ConversorProcess {
    conversores = [];
    constructor(valor, nombre, destino) {
        this.nombre = nombre;
        this.conversorDeMonedas = new ConversorDeMonedas(valor, nombre, destino);
        this.conversorDeTemperaturas = new ConversorDeTemperaturas(valor, nombre, destino);
        this.conversorDeTiempos = new ConversorDeTiempos(valor, nombre, destino);
        this.conversorDeDistancias = new ConversorDeDistancias(valor, nombre, destino);
        this.conversores.push(this.conversorDeMonedas, this.conversorDeTemperaturas, this.conversorDeDistancias, this.conversorDeTiempos);
    }

    elegirConversor(conversores) {
        
        for (let conversor of conversores) {
            if (conversor.nombres.includes(this.nombre)) {
                return conversor;
            }
        }
    }
    ejecucion() {
        this.conversor = this.elegirConversor(this.conversores);
        return this.conversor.ejecucion();
    }
}