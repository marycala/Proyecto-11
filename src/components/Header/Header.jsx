import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    setKeyword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (keyword.trim() !== '') {
      navigate(`/search/${encodeURIComponent(keyword)}`)
    }
  }

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Search by name'
          onChange={handleChange}
          type='text'
          value={keyword}
        />
        <button type='submit'>🔍</button>
      </form>
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
    </header>
  )
}

export default Header
