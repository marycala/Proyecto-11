import './Characters.css'
import Loading from '../../components/Loading/Loading'
import React, { useEffect, useState } from 'react'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import Pagination from '../../components/Pagination/Pagination'
import { Link } from 'react-router-dom'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    setCharacters([])
    fetch(
      `https://stranger-things-api.fly.dev/api/v1/characters?page=${page}&perPage=10`
    )
      .then((res) => res.json())
      .then((res) => {
        setCharacters(res)
        setLoading(false)
      })
  }, [page])

  return (
    <main className='characters'>
      {loading && <Loading />}
      {characters.map((character) => (
        <Link
          className='character-link'
          key={character._id}
          to={`/characters/${character._id}`}
        >
          <CharacterCard character={character} />
        </Link>
      ))}
      <Pagination page={page} setPage={setPage} />
    </main>
  )
}

export default Characters
