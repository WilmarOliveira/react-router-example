import { Link } from 'react-router-dom'
import { ContainerHome } from './styles'

export const Home = () => {
   return (
      <ContainerHome>
         <Link to="/movies">Welcome to World of Rick &amp; Morty</Link>
      </ContainerHome>
   )
}
