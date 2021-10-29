import React from 'react'
import { useParams } from 'react-router'
import ListaPost from './ListaPost'
const SubCategoria = () => {
    const { subcategoria } = useParams()
    return (
        <div>
            <ListaPost url={`/posts?subcategoria=${subcategoria}`} />
        </div>
    )
}
export default SubCategoria