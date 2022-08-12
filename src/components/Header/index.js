import { useHistory } from 'react-router-dom'
import { ContainerHeader } from './styles'

const Header = () => {
   const history = useHistory()

   console.log(history.location.pathname)

   const goToHome = () => {
      history.push('/')
   }

   return (
      <ContainerHeader>
         <h2 onClick={goToHome}>Home</h2>
      </ContainerHeader>
   )
}

export default Header
