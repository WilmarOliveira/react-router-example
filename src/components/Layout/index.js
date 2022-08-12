import Header from '../Header'

export const Layout = ({ component }) => {
   return (
      <div>
         <Header />
         {component}
      </div>
   )
}
