import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../api/api'
const ListaPost = ({ url }) => {
    const [posts, setPosts] = useState([])
   
    useEffect(() => {
        console.log(url)
        busca(url, setPosts)
    }, [url])

    return (
        <section className="posts container">
            {
                posts.map((post) => (
                    <Link to={`/posts/${post.id}`} className={`cartao-post cartao-post--${post.categoria}`}>
                        <article key={post.id}>
                            <h3 className="cartao-post__titulo">
                                {post.title}
                            </h3>
                            <p className="cartao-post__metadado">{post.metadescription}</p>
                        </article>
                    </Link>
                ))
            }
        </section>
    )

}

export default ListaPost