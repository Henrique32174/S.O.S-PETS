import { Routes, Route, Outlet } from 'react-router'
import React from 'react'
import Header from './Header'
import Home from './Home'
import Sobre from './Sobre'
import Feedback from './Feedback'
import Adicionar from './Adicionar'
import Buscar from './Buscar'
import Login from './Login'
import Usuario from './Usuario'
import Cadastro from './Cadastro'
import Listagem from './Listagem'
import AnimalDomestico from './AnimalDomestico'
import Usuarios from './Usuarios'

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/sujestao" element={<Feedback />} />
          <Route path="/adicionar" element={<Adicionar />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/buscar/listagem" element={<Listagem />} />
          <Route path="/buscar/animaldomestico" element={<AnimalDomestico />} />
        </Routes>
        <Outlet />
      </main>
    </>
  )
}

export default App
