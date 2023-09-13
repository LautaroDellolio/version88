import React, { useContext } from 'react'; 
import { ThemeContext } from "../Components/utils/global.context"
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { state } = useContext(ThemeContext);
  const { data} = state;
  const { id } = useParams();

  return (
    <div style={{ background: state.theme.background, color: state.theme.color }}>
      <p>{data[id].name}</p>
      <p>{data[id].username}</p>
      <p>{data[id].email}</p>
      <p>{data[id].phone}</p>
      <p>{data[id].website}</p>
    </div>
  )
}

export default Detail
