export class Tiempo {
    constructor(valor) {
        if (this.constructor == Tiempo) {   
            throw new Error('No se puede instanciar una clase abstracta');
        }
      this.valor = valor;
    }
    
    convertirA() {
        throw new Error('No se puede instanciar una clase abstracta');
    }
  }