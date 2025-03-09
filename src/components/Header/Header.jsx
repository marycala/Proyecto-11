import { NavLink, useNavigate } from 'react-router-dom'
import './Header.css'
import { useState } from 'react'

const Header = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    }
  }

  const handleChange = (event) => {
    setKeyword(event.target.value)
  }

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
          <li>
            <NavLink to='/favorites'>Favorites</NavLink>
          </li>
        </ul>
      </nav>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Search by name'
          onChange={handleChange}
          type='text'
          value={keyword}
        />
      </form>
    </header>
  )
}

export default Header
