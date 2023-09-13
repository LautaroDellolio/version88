import React, { useContext } from "react";
import { ThemeContext } from "./utils/global.context"

const Form = () => {
  const { state } = useContext(ThemeContext);
  return (
    <div style={{ background: state.theme.background, color: state.theme.color }}>
      <h2>Este es el form</h2>
    </div>
  )
}

export default Form
