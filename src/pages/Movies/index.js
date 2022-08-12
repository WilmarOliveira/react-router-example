import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ContainerMovies, List, ListItem } from './styles'

export const Movies = () => {
   const [movies, setMovies] = useState([])

   useEffect(() => {
      async function getCharacters() {
         const response = await axios.get(
            'https://rickandmortyapi.com/api/character?page=1'
         )
         console.log(response.data)
         setMovies(response.data.results.slice(0, 3))
      }

      getCharacters()
   }, [])

   return (
      <ContainerMovies>
         <h1>Choose your character</h1>
         <List>
            {movies.map((movie) => (
               <ListItem key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>
                     <img src={movie.image} alt={movie.name} />
                  </Link>
               </ListItem>
            ))}
         </List>
      </ContainerMovies>
   )
}
