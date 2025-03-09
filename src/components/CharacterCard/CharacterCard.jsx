import './CharacterCard.css'

const CharacterCard = ({ character, isFavorite, toggleFavorite }) => {
  if (!character?.photo) return null

  return (
    character.photo && (
      <div className='character-card'>
        <div className='cortina'>
          <h2>{character.name}</h2>
        </div>
        <div className='img-wrp'>
          <img src={character.photo} alt={character.name} />)
        </div>
        <div className='favorite'>
          <button
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={(event) => {
              event.stopPropagation()
              toggleFavorite(character)
            }}
          >
            {isFavorite ? '★ Remove' : '☆ Add to Favorites'}
          </button>
        </div>
      </div>
    )
  )
}

export default CharacterCard
