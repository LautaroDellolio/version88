import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from "../Components/utils/global.context"



const Nopage = () => {
  const { state} = useContext(ThemeContext);
  return (
    <div style={{background:state.theme.background, color: state.theme.color, height: "80vh"}}>
      <h1 style={{fontStyle: "italic"}}>No se Encontro La Pagina</h1>
      <img src="public\images\404-not-found-medicine-removebg-preview.png"></img>
    </div>
  )
}

export default Nopage
