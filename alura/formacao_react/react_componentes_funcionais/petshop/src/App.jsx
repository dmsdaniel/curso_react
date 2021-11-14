import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sobre from './paginas/Sobre'
import Home from './paginas/Home'
import './assets/css/base/base.css'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'
import Post from './paginas/Post'
import Categoria from './paginas/Categoria'
import Categorias from './paginas/Categorias'
import Tabela from './paginas/Tabela'
import { GlobalStyled } from './UI/GlobalStyled'


function App() {
  return (
    <div className="p-6 items-center justify-center">

      <Router> 
        <GlobalStyled/>
        <Cabecalho />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/sobre'>
            <Sobre />
          </Route>
          <Route path='/formCategorias'>
            <Tabela />
          </Route>
          <Route path='/categoria/:id'>
            <Categoria />
          </Route>
          <Route path='/posts/:id'>
            <Post />
          </Route>
          <Route path='/tabela'>
            <Categorias/>
          </Route>
          <Route>
            <Pagina404 />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
