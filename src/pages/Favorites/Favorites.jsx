import React, { useReducer, useEffect } from 'react'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import './Favorites.css'
import { useNavigate } from 'react-router-dom'

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.payload]
    case 'REMOVE_FAVORITE':
      return state.filter((char) => char._id !== action.payload)
    default:
      return state
  }
}

const Favorites = () => {
  const navigate = useNavigate()

  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    JSON.parse(localStorage.getItem('favorites')) || []
  )

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (character) => {
    if (favorites.some((fav) => fav._id === character._id)) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: character._id })
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: character })
    }
  }

  return (
    <main className='favorites'>
      <button onClick={() => navigate('/')} className='back-btn'>
        ← Home
      </button>
      <h2>My Favorites Characters</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className='favorites-grid'>
          {favorites.map((character, index) => (
            <CharacterCard
              key={character._id ? String(character._id) : `char-${index}`}
              character={character}
              isFavorite={true}
              toggleFavorite={() => toggleFavorite(character)}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Favorites
