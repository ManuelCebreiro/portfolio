import React, { useState } from "react";
import swal from "sweetalert";
import "../Styles/Formulario.css";

const Formulario = ({ ContactoSection }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const mostrarAlerta = () => {
    swal({
      title: "Email enviado con éxito",
      text: "Te contestaré lo antes posible, gracias",
      icon: "success",
      timer: "3000",
    });
  };
  const mostrarError = (mensaje) => {
    swal({
      title: "Error",
      text: mensaje,
      icon: "error",
      timer: "3000",
    });
  };

  const validarFormulario = () => {
    if (!nombre || !email || !mensaje) {
      mostrarError("Por favor, completa todos los campos.");
      return false;
    }

    const regex = /\S+@\S+\.\S+/;
    if (!regex.test(email)) {
      mostrarError("Por favor, ingresa un correo electrónico válido.");
      return false;
    }

    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      e.target.submit();
      mostrarAlerta();
    }
  };

  return (
    <div className="contenedor" ref={ContactoSection}>
      <h2 className="head-text">Contacto</h2>
      <div className="formulario">
        <form
          className="contenido"
          action="https://formsubmit.co/cebreirom@gmail.com"
          method="POST"
        >
          <input
            className="inputstyle"
            type="text"
            name="name"
            placeholder="Nombre"
            required
            onChange={(e) => setNombre(e.target.value)}
          ></input>
          <input
            className="inputstyle"
            type="text"
            name="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <textarea
            className="textareastyle"
            type="text"
            placeholder="Tu mensaje"
            name="message"
            required
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
          <button
            // onClick={() => mostrarAlerta()}
            type="submit"
            className="btnenviar"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
