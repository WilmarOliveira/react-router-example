import { useHistory } from 'react-router-dom'
import { ContainerHeader } from './styles'

const Header = () => {
   const history = useHistory()

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
