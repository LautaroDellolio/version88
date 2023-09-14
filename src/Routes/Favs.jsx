import React, { useContext } from "react";
import { ThemeContext } from "../Components/utils/global.context"


const Favs = () => {
  const { state } = useContext(ThemeContext);
  const localFavorites = JSON.parse(localStorage.getItem("favorites"))

  return (

    <div style={{ background: state.theme.background, color: state.theme.color }}>
      <div className='cardContainer'>
        {localFavorites === null ? (
          <h2>No hay favoritos</h2>
        ) : (
          localFavorites.map((favorite, index) => {
            const parsedFavorite = JSON.parse(favorite);
            return (
              <div key={parsedFavorite.id} className='card'>
                <img src="public/images/doctor.jpg" alt="Photo" />
                <h2>{parsedFavorite.name}</h2>
                <p>Email: {parsedFavorite.email}</p>
                <p>Phone: {parsedFavorite.phone}</p>
              </div>
            );
          })
        )
        }
      </div>
      <button onClick={()=>localStorage.clear()}>Eliminar todo</button>
    </div>
  )
}

export default Favs


const handle = () => {
  console.log(local);
}