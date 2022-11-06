const tipoDeErrores = ["valueMissing", "customError", "patternMismatch"];
let maxCharacters = 50;
let maxCharacters2 = 300;

const mensajesDeError = {

  name: {
    valueMissing: "this field cannot be empty",
    customError: "Max length 50 characters",
  },
  email: {
    valueMissing: "this field cannot be empty",
    patternMismatch: "invalid email E.g. text@text.com",
  },
  enquiry: {
    valueMissing: "this field cannot be empty",
    customError: "Max length 50 characters",
  },
  message: {
    valueMissing: "this field cannot be empty",
    customError: "Max length 300 characters",
  },

};

export function valida(input) {

  const tipoDeInput = input.dataset.tipo;

  if (validarMaxCaracteres[tipoDeInput]) {
    validarMaxCaracteres[tipoDeInput](input);
  };
  
  if (input.validity.valid) {
    input.parentElement.classList.remove("input__container--invalid");
    input.parentElement.querySelector(".input__message__error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input__container--invalid");
    input.parentElement.querySelector(".input__message__error").innerHTML =
      mostrarMensajesDeError(tipoDeInput, input);
  };

};

function mostrarMensajesDeError(tipoDeInput, input) {

  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    };
  });
  return mensaje;

};

const validarMaxCaracteres = {

  name:   (input) => checklargo(input),
  enquiry:(input) => checklargo(input),
  message:(input) => checklargo2(input)
  
};


function checklargo(input) {

  let mensaje = "";
  input.value.length > maxCharacters && (mensaje = "Max length 50 characters"),
  input.setCustomValidity(mensaje);

}

function checklargo2(input) {

  let mensaje = "";
  input.value.length > maxCharacters2 && (mensaje = "Max length 300 characters"),
  input.setCustomValidity(mensaje);

}

