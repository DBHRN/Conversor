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
        console.log(this.medidas);
        this.valor = this.convertirA(this.destino, this.medidas);
        console.log(this.valor);
        return this.valor;
    }
}