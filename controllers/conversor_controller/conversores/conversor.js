export class Conversor {

    nombres = [];
    medidas = [];

    constructor(valor, nombre, destino) {
        this.nombre = nombre;
        this.destino = destino;
        this.valor = valor;
    }
    convertirAComun() {
        throw new Error('No se puede instanciar una clase abstracta');
    }
    convertirA(destino, medidas) {
        for (let medida of medidas) {
            if (medida.nombre == destino) {
                return medida.convertirA(this.valor);
            }
        }
    }
    ejecucion(medidas) {
        this.medidas = medidas;
        this.valor = this.convertirA(this.destino, this.medidas);
        return this.valor;
    }   
}