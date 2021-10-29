import React, { useState, useEffect } from 'react'
import { Route, useParams, useRouteMatch, Link, Switch } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from './ListaPost'
import SubCategoria from './SubCategoria'

const Categoria = () => {
    const { id } = useParams()
    const { url, path } = useRouteMatch()
    const [subcategorias, setsubcategorias] = useState([])
    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setsubcategorias(categoria.subcategorias)
        })
    }, [id])
    return (
        <main>
            <div className="container">
                <h2 className="titulo-pagina">Categorias</h2>
            </div>
            <ListaCategorias />
            <ul className="lista-categorias container flex">
                {
                    subcategorias.map((subcategoria) => (
                        <li className={`lista-categorias__categoria 
                            lista-categorias__categoria--${id}`}
                            key={subcategoria}
                        >
                            <Link to={`${url}/${subcategoria}`} >
                                {subcategoria}
                            </Link>

                        </li>
                    ))
                }
            </ul>
            <Switch>
                <Route exact path={`${path}/`}>
                    <ListaPost url={`/posts?categoria=${id}`} />
                </Route>
                <Route path={`${path}/:subcategoria` }>
                    <SubCategoria/>
                </Route>
            </Switch>
        </main>
    )
}

export default Categoria