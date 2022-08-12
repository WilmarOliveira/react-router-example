import { Link } from 'react-router-dom'

export const Movies = () => {
   return (
      <div>
         <ul>
            <li>
               <Link to="/movie/1">Filme 1</Link>
            </li>
            <li>
               <Link to="/movie/2">Filme 2</Link>
            </li>
            <li>
               <Link to="/movie/3">Filme 3</Link>
            </li>
         </ul>
      </div>
   )
}
