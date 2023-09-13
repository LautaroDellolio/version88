import React, { useContext} from 'react'
import { ThemeContext  } from './utils/global.context'

const Footer = () => {
  const { state } = useContext(ThemeContext);

  return (
    <footer style={{ background: state.theme.background, color: state.theme.color }} >
        <p>Powered by</p>
    </footer>
  )
}

export default Footer
