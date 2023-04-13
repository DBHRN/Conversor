export const validarInput = (input) => {
if (input.validity.valid) {
    input.classList.remove("input-error");
    document.querySelector(".input-message-error").display = "";
    document.querySelector(".input-message-error").textContent = "";
}else{
    console.log(input.value)
    input.classList.add("input-error");
    document.querySelector(".input-message-error").display = "block";
    document.querySelector(".input-message-error").textContent = "No deberías poner letras";
    input.value = "";
  }
}