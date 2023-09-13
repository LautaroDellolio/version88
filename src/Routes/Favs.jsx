import React, { useContext } from "react";
import { ThemeContext } from "../Components/utils/global.context"


const Favs = () => {
  const { state } = useContext(ThemeContext);
  return (
    <div style={{ background: state.theme.background, color: state.theme.color }}>
      <h2>Estos los favs</h2>
    </div>
  )
}

export default Favs
