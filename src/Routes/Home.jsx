import React, { useContext } from "react";
import { ThemeContext } from  "../Components/utils/global.context"

const Home = () => {
  const { state } = useContext(ThemeContext);

  const styles = {
    backgroundColor: state.theme.background,
    color: state.theme.color,
    padding: "20px", // Puedes ajustar los estilos según tus necesidades
  };

  return (
    <div style={styles}>
      <h1>Hola</h1>
    </div>
  )
}

export default Home
