export class Dinero {
    constructor(valor) {
        if (this.constructor == Dinero) {   
            throw new Error('No se puede instanciar una clase abstracta');
        }
      this.valor = valor;
    }
    
    convertirA() {
        throw new Error('No se puede instanciar una clase abstracta');
    }
  }