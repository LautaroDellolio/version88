import React, { useContext, useState } from "react";
import { ThemeContext } from "./utils/global.context"
import '../App.css'

const Form = () => {
  const { state } = useContext(ThemeContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("")

  function handleNombre(e) {
    setNombre(e.target.value)
  }
  function handleEmail(e) {
    setEmail(e.target.value)
  }

  function sendForm(e) {
    e.preventDefault()
    if (nombre.length <= 5) {
      setMensaje('Por favor, ingrese un nombre válido (más de 5 caracteres).');
      return;
    }
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!email.match(emailRegex)) {
      setMensaje('Por favor, ingrese una dirección de correo electrónico válido.');
      return;
    }
    setMensaje(`Gracias ${nombre}, te contactaremos lo antes posible vía correo electrónico.`);
  };
  return (
    <div style={{ background: state.theme.background, color: state.theme.color }} className="styleForm">
      <h2>Gracias por Contactarnos</h2>
            <p>Por favor ingresa tus datos</p>
            <form onSubmit={sendForm}>
                <div>
                    <label>Nombre</label>
                    <input type="text" placeholder="Ingrese su nombre" value={nombre} onChange={handleNombre} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="Ingrese su Email" value={email} onChange={handleEmail} />
                </div>
                <button>Enviar</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
    </div>
  )
}

export default Form
