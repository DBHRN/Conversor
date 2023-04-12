export class Temperatura {
    constructor(valor) {
        if (this.constructor == Temperatura) {   
            throw new Error('No se puede instanciar una clase abstracta');
        }
      this.valor = valor;
    }
    
    convertirA() {
        throw new Error('No se puede instanciar una clase abstracta');
    }
  }