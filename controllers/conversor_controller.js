import { ConversorView } from "./conversor_controller/conversorView.js";
import { ConversorProcess } from "./conversor_controller/conversorProcess.js";
import { validarInput } from "./validacion_controller.js";

export class ConversorController {
    constructor() {
        this.conversor = null;
        this.conversorView = new ConversorView();
        this.conversorView.input.addEventListener("keyup", this.iniciarConversion.bind(this));
        this.conversorView.input.addEventListener("change", this.iniciarConversion.bind(this));
        this.conversorView.firstSelect.addEventListener("change", this.iniciarConversion.bind(this));
        this.conversorView.secondSelect.addEventListener("change", this.iniciarConversion.bind(this));
    }

    iniciarConversion() {
        let input = this.conversorView.input.value;
        let inputBox = this.conversorView.input;
        validarInput(inputBox);
        let firstSelect = this.conversorView.firstSelect.value;
        let secondSelect = this.conversorView.secondSelect.value;
        let resultado = this.conversorView.resultado;
        this.conversor = new ConversorProcess(input, firstSelect, secondSelect);
        resultado.value = this.conversor.ejecucion();
    }
}