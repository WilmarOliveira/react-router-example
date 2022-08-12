import { useHistory } from 'react-router-dom'

const Header = () => {
   const history = useHistory()

   const goToHome = () => {
      history.push('/')
   }

   return (
      <h1>
         <div style={{ cursor: 'pointer' }} onClick={goToHome}>
            Home
         </div>
      </h1>
   )
}

export default Header
