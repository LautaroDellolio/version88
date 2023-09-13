import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ThemeContext } from "./utils/global.context"

const Navbar = () => {
    const { state, dispatch } = useContext(ThemeContext);

    const toggleTheme = () => {
        dispatch({ type: 'TOGGLE_THEME' });
      };

    return (
        <>  <div className='styleNavbar'>
            <img src="" alt="img" />
            <nav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/favs">Favs</Link></li>
                <button onClick={toggleTheme} style={{
    backgroundColor: state.theme.background,
    color: state.theme.color
  }}>Change theme</button>
            </nav>
            <Outlet />
        </div>
        </>
    )
}

export default Navbar
