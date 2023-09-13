import React, { useContext } from 'react';
import { ThemeContext } from "./utils/global.context"
import { Link } from 'react-router-dom';
import '../App.css'


const Card = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const { data } = state;

  const addToFavorites = (id) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const selectedItem = data.find((item) => item.id === id);
    
    const isAlreadyInFavorites = favorites.some((favItem) => {
      const parsedItem = JSON.parse(favItem);
      return parsedItem.id === id;
    });

    if (!isAlreadyInFavorites) {
      favorites.push(JSON.stringify(selectedItem));
      localStorage.setItem("favorites", JSON.stringify(favorites));
      alert("Card agregada a favoritos!");
  } else {
    alert("la card ya esta agregada")
  }
  };

  return (
    <>
      <div className='cardContainer'>
        {data.map((item) => (
          <div key={item.id} className='card' >
            <Link to={`/detail/${item.id}`} key={item.id}>
              <img src="public/images/doctor.jpg" alt="Photo" />
              <h2>{item.name}</h2>
              <p>Email: {item.email}</p>
              <p>Phone: {item.phone}</p>
            </Link>
            <button onClick={() => addToFavorites(item.id)}>Add Fav</button>
          </div>
        ))}
      </div >
    </>
  );

}

export default Card





    // console.log(favorites);
    // favorites.push("Primer Favorito")
    // console.log("segundo log"+  favorites);
    // console.log(data);
    // favorites.push(data[1])
    // console.log(favorites);


    // Verificar si el item ya está en favoritos
    // if (!favorites.some((favItem) => favItem.id === item.id)) {
    //   // Si no está en favoritos, agregar solo la información relevante
    //   const itemToAdd = {
    //     id: item.id,
    //     name: item.name,
    //     email: item.email,

    //     phone: item.phone,
    //   };
    //   console.log('Agregando al localstorage', itemToAdd );
  
    //   // Agregar el item a favoritos
    //   favorites.push(itemToAdd);
  
    //   // Guardar los favoritos actualizados en el localStorage
    //   localStorage.setItem("favorites", JSON.stringify(favorites));
  
    //   // Puedes mostrar un mensaje de éxito aquí si lo deseas
    //   alert("Card added to favorites!");
    // } else {
    //   // Puedes mostrar un mensaje de error aquí si el item ya está en favoritos
    //   alert("Card is already in favorites!");
    // }

  
