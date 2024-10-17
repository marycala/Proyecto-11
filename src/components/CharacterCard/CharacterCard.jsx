import './CharacterCard.css'

const CharacterCard = ({ character }) => {
  return (
    character.photo && (
      <div className='character-card'>
        <div className='cortina'>
          <h2>{character.name}</h2>
        </div>
        <div className='img-wrp'>
          <img src={character.photo} alt={character.name} />)
        </div>
      </div>
    )
  )
}

export default CharacterCard
