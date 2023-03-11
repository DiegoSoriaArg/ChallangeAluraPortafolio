//Creamos una funcion para captar el dato que viene en los imputs y la exportamos
export function validar (input){
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid) {
        input.parentElement.classList.remove("formcontacto__form__container--invalid");
        input.parentElement.querySelector(".formcontacto__mensaje__error");
    } else {
        input.parentElement.classList.add("formcontacto__form__container--invalid");
        input.parentElement.querySelector(".formcontacto__mensaje__error").innerHTML = MostrarMensajeDeerror(tipoDeInput, input);
    }
}

//Idetificamos el tipo de error posible que nos devulve el targe del input
const tipoDeError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
];

//Creamos objetos que identifiquen los mensajes que enviaremos
const mensajeDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacio",
  },
  email: {
    valueMissing: "El campo email no puede estar vacio",
    typeMismatch: "El correo no es valido",
    patternMismatch: "El email debe tener el siguiente formato xxx@xxx.com"
  },
  asunto: {
    valueMissing: "El campo asunto no puede estar vacio",
    patternMismatch: "El asunto no puede tener mas de 50 caracteres.",
  },
  mensaje: {
    valueMissing: "El campo mensaje no puede estar vacio",
    patternMismatch:
      "El mensaje no puede sobrepasar los 200 caracteres, intente ser mas especifico por favor.",
  },
};

//Creamos la funcion encargada de identificar el tipo de error
function MostrarMensajeDeerror(tipoDeInput, input) {
    let mensaje = "";
    tipoDeError.forEach(error => {
        if(input.validity[error]){
            mensaje = mensajeDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}
