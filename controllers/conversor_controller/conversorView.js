export class ConversorView {
    constructor() {
        this.input = document.querySelector("[data-money]");
        this.firstSelect = document.querySelector("[data-first-kind]");
        this.secondSelect = document.querySelector("[data-second-kind]");
        this.resultado = document.querySelector("[data-result]");
    }
}