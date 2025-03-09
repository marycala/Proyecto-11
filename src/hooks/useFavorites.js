import { useReducer, useEffect } from 'react'

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

const useFavorites = () => {
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

  return { favorites, toggleFavorite }
}

export default useFavorites
