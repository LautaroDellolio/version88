import React, { useContext } from 'react';
import { ThemeContext } from "./utils/global.context"
import { Link } from 'react-router-dom';
import '../App.css'

const Card = () => {
  const { state } = useContext(ThemeContext);
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
      alert("La card ya existe en favoritos")
    }
  };

  return (
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
  );
}

export default Card