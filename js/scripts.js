const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("input", leerTexto);

email.addEventListener("input", leerTexto);

mensaje.addEventListener("input", leerTexto);

function leerTexto(e) {
  /* console.log("escribiendo.."); */
  /*  console.log(e.target.value); */

  datos[e.target.id] = e.target.value;
  /* console.log(datos); */
}

/* SUBMIT */

const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", function (e) {
  e.preventDefault(); /* Evita que se ejecute el evento por defecto, 
  en este caso actualizar la pagina y enviar el form */

  /* Validar el formulario */

  const { nombre, email, mensaje } = datos;

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarAlerta("Todos los campos son obligatorios", true);

    return; /* Corta la ejecucion del codigo */
  }

  /* Enviar formulario */

  mostrarAlerta("Enviando formulario...");
});

function mostrarAlerta(mensaje, error = null) {
  const alerta = document.createElement("P");
  alerta.textContent = mensaje;

  if (error) {
    alerta.classList.add("error");
  } else {
    alerta.classList.add("correcto");
  }
  formulario.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 4000);
}
