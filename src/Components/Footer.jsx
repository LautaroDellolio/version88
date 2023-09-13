import React, { useContext} from 'react'
import { ThemeContext  } from './utils/global.context'

const Footer = () => {
  const { state } = useContext(ThemeContext);

  return (
    <footer >
        <p>Powered by</p>
    </footer>
  )
}

export default Footer
