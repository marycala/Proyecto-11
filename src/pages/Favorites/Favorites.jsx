import React, { useState, useEffect } from 'react'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import './Favorites.css'
import { useNavigate } from 'react-router-dom'

const Favorites = () => {
  const navigate = useNavigate()
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || []
    setFavorites(storedFavorites)
  }, [])

  const removeFavorite = (characterId) => {
    const updatedFavorites = favorites.filter(
      (char) => char._id !== characterId
    )
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
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
          {favorites.map((character) => (
            <CharacterCard
              key={character._id}
              character={character}
              isFavorite={true}
              toggleFavorite={() => removeFavorite(character._id)}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Favorites
