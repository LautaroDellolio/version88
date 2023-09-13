import React, { useContext } from "react";
import { ThemeContext } from  "../Components/utils/global.context"
import Card from "../Components/Card";
import { Link } from "react-router-dom";



const Home = () => {
  const { state } = useContext(ThemeContext);

  return (
    <div style={{ background: state.theme.background, color: state.theme.color }}>
      <h1>Hola</h1>
      {/* {state.data.map((item) => (
        <Link to={`/detail/${item.id}`} key={item.id} style={{ textDecoration: "none" }}>
          <Card data={item} />
        </Link>
      ))} */}
      <Card/>
    </div>
  )
}

export default Home
