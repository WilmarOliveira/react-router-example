import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ContainerMovie } from './styles'

export const Movie = () => {
   const params = useParams()
   const [character, setCharacter] = useState({})

   useEffect(() => {
      async function getCharacter() {
         const response = await axios.get(
            `https://rickandmortyapi.com/api/character/${params.id}`
         )
         console.log(response.data)
         setCharacter(response.data)
      }

      getCharacter()
   }, [params.id])

   return (
      <ContainerMovie>
         <h2>{character.name}</h2>
         <img src={character.image} alt={character.name} />
         <ul>
            <li>{character.gender}</li>
            <li>{character.species}</li>
            <li>{character.status}</li>
         </ul>
         <Link to="/movies">Return to back page</Link>
      </ContainerMovie>
   )
}
