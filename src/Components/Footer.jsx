import React, { useContext} from 'react'
import { ThemeContext  } from './utils/global.context'

const Footer = () => {
  const { state } = useContext(ThemeContext);

  return (
    <footer >
        <p>Powered by Lautaro Dell´Olio & Agustin Ras </p>
    </footer>
  )
}

export default Footer
