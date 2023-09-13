import React, { useContext } from 'react'; 
import { ThemeContext } from "./utils/global.context"

const Card = () => {
  const { state } = useContext(ThemeContext);
  const { data } = state;

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} style={{ background: state.theme.background, color: state.theme.color }}>
          <h2>{item.name}</h2>
          <p>Email: {item.email}</p>
          <p>Phone: {item.phone}</p>
        </div>
      ))}
    </div>
  );

}

export default Card
