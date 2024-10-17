import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/characters'>Characters</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
