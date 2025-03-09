import useLocalStorage from './useLocalStorage'

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
  const [favorites, setFavorites] = useLocalStorage('favorites', [])

  const dispatch = (action) => {
    const newState = favoritesReducer(favorites, action)
    setFavorites(newState)
  }

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
