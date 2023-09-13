import React, { useContext } from 'react';
import { ThemeContext } from "./utils/global.context"
import { Link } from 'react-router-dom';
import '../App.css'


const Card = () => {
  const { state } = useContext(ThemeContext);
  const { data } = state;

  return (
    <div className='cardContainer'>
      {data.map((item) => (
        <Link to={`/detail/${item.id}`} key={item.id}>
          {/* style={{ background: state.theme.background, color: state.theme.color }} */}
          <div key={item.id}  className='card' >
            <img src="" alt="Photo" />
            <h2>{item.name}</h2>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            <button>Add Fav</button>
          </div>

        </Link>
      ))}
    </div>
  );

}

export default Card
