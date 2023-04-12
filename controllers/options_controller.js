const menu1 = document.querySelector('[data-first-kind]');
const menu2 = document.querySelector('[data-second-kind]');
const titulo = document.querySelector('[data-titulo]');
const botones = document.querySelectorAll('[data-btn]');
const input1 = document.querySelector('[data-money]');
const input2 = document.querySelector('[data-result]');

const opciones = {
  moneda: [
    { valor: 'pesos', texto: 'Pesos Mexicanos' },
    { valor: 'dolares', texto: 'Dolares' },
    { valor: 'euros', texto: 'Euros' },
    { valor: 'libras', texto: 'Libras Esterlinas' },
    { valor: 'yen', texto: 'Yen Japonés' },
    { valor: 'won', texto: 'Won sul-coreano' },
  ],
  temperatura: [
    { valor: 'centigrados', texto: 'Celsius' },
    { valor: 'fahrenheit', texto: 'Fahrenheit' },
    { valor: 'kelvin', texto: 'Kelvin' },
  ],
  distancia: [
    { valor: 'kilometros', texto: 'Kilometros' },
    { valor: 'metros', texto: 'Metros' },
    { valor: 'centimetros', texto: 'Centimetros' },
    { valor: 'milimetros', texto: 'Milímetros' },
  ],
  tiempo: [
    { valor: 'horas', texto: 'Horas' },
    { valor: 'minutos', texto: 'Minutos' },
    { valor: 'segundos', texto: 'Segundos' },
    { valor: 'milisegundos', texto: 'Milisegundos' },
  ],
};

function actualizarOpciones(conversion) {
  menu1.innerHTML = opciones[conversion]
    .map(({ valor, texto }) => `<option value="${valor}">${texto}</option>`)
    .join('');

  menu2.innerHTML = opciones[conversion]
    .map(({ valor, texto }) => `<option value="${valor}">${texto}</option>`)
    .join('');
}

function cambiarBackground(conversion) {
  document.body.style.background = `linear-gradient(rgba(0, 0, 0, var(--opacidad-negro)), rgba(0, 0, 0, var(--opacidad-negro))), url(assets/${conversion}.png) no-repeat center center fixed`;
}

function cambiarColorBotones(tipo) {
  const style = document.createElement('style');
  style.innerHTML = `.btn:hover {
    background: var(--bg-${tipo});
  }`;
  document.head.appendChild(style);
}

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    const conversion = boton.textContent.toLowerCase();
    titulo.textContent = `Conversor de ${conversion}`;
    actualizarOpciones(conversion);
    cambiarBackground(conversion);
    cambiarColorBotones(conversion);
    input1.value = "";
    input2.value = "";
  });
});