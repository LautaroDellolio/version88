import React, { useContext } from "react";
import { ThemeContext } from  "../Components/utils/global.context"
import Card from "../Components/Card";
import { Link } from "react-router-dom";



const Home = () => {
  const { state } = useContext(ThemeContext);

  return (
    <div style={{ background: state.theme.background, color: state.theme.color, padding: state.theme.padding}}>
      <h1>Listado de Médicos</h1>
      <Card/>
    </div>
  )
}

export default Home
