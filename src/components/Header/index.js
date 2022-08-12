import { useLocation, useNavigate } from 'react-router-dom'
import { ContainerHeader } from './styles'

const Header = () => {
   const navigate = useNavigate()
   const location = useLocation()

   console.log(location.pathname)

   const goToHome = () => {
      navigate('/')
   }

   return (
      <ContainerHeader>
         <h2 onClick={goToHome}>Home</h2>
      </ContainerHeader>
   )
}

export default Header
