import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className='navbar-brand' to="/canciones">Musicando</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className='nav-link' to="/canciones">Canciones</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/canciones/create">Crear Canción</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Propiedades
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/canciones/generos">Generos</Link></li>
                                    <li><Link className="dropdown-item" to="/canciones/album">Album</Link></li>
                                    <li><Link className="dropdown-item" to="/canciones/artista">Artista</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}