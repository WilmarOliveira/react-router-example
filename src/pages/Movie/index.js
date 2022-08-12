import { useParams } from 'react-router-dom'

export const Movie = () => {
   const params = useParams()
   return (
      <div>
         <p>Filme {params.id}</p>
      </div>
   )
}
