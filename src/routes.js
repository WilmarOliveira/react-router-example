import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Movies } from './pages/Movies'
import { Movie } from './pages/Movie'
import { Home } from './pages/Home'
import { Layout } from './components/Layout'
import React from 'react'

export const AppRoutes = () => {
   return (
      <BrowserRouter>
         <React.StrictMode>
            <Switch>
               <Route exact path="/home">
                  <Layout component={<Home />} />
               </Route>
               <Route exact path="/movies">
                  <Layout component={<Movies />} />
               </Route>
               <Route exact path="/movie/:id">
                  <Layout component={<Movie />} />
               </Route>
               <Redirect exact path="/" to="/home" />
            </Switch>
         </React.StrictMode>
      </BrowserRouter>
   )
}
