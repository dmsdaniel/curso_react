import React from 'react'
import imagem from '../assets/img/doguito404.svg'
import '../assets/css/404.css'
export default function Pagina404() {
    return (
        <div>
            <main className="container flex flex--centro flex--coluna" >
                <img className="doguito-imagem" src={imagem} alt="ilustração doguito"/>
                <p className="naoencontrado-texto">Ops, esta página não existe!</p>
            </main>
        </div>

    )
}