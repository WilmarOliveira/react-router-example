import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Movies } from './pages/Movies'
import { Movie } from './pages/Movie'
import { Home } from './pages/Home'
import { Layout } from './components/Layout'
import React from 'react'

export const AppRoutes = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<Layout />}>
               <Route path="/" element={<Navigate replace to="/home" />} />
               <Route path="/home" element={<Home />} />
               <Route path="/movies" element={<Movies />} />
               <Route path="/movie/:id" element={<Movie />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}
