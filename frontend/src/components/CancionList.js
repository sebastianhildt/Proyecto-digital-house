import React, { Component } from 'react';
import axios from 'axios';
export default class cancionList extends Component {
    state = {
        canciones: [],
        generos: [],
        albums: [],
        artistas: [],
        countCanciones: 0
    }

    componentDidMount() {
        this.getCancion();
        this.getGenero();
        this.getArtista();
        this.getAlbum();
    }

    // Get
    getCancion = async () => {
        const res = await axios.get('http://localhost:4000/canciones');
        this.setState({
            canciones: res.data.data,
            countCanciones: res.data.data.length
        })
    }

    getGenero = async () => {
        const res = await axios.get('http://localhost:4000/generos');
        this.setState({ generos: res.data })
    }
    getArtista = async () => {
        const res = await axios.get('http://localhost:4000/artistas');
        this.setState({ artistas: res.data })
    }
    getAlbum = async () => {
        const res = await axios.get('http://localhost:4000/albumes');
        this.setState({ albums: res.data })
    }
    // PUT
    editCancion = (id) => {
        window.location.href = `/canciones/${id}`;
    }
    // DEL
    deleteCancion = async (id) => {
        if (window.confirm('¿Estas seguro de querer eliminarlo?')) {
            await axios.delete(`http://localhost:4000/canciones/${id}`);
            this.getCancion();
            this.getGenero();
            this.getArtista();
            this.getAlbum();
        }
    }
    render() {
        return (
            <div className="row">
                <div className="row">
                    <div className="container d-flex justify-content-center">
                        <div className="card text-white bg-dark mb-3 text-center">
                            <div className="card-header">
                                <h2 className='card-title'>Total de Canciones</h2>
                            </div>
                            <div className="card-body">
                                <span style={{fontSize: '3rem'}}>{this.state.countCanciones}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Titulo</th>
                                    <th scope="col">Duracion</th>
                                    <th scope="col">Genero</th>
                                    <th scope="col">Album</th>
                                    <th scope="col">Artista</th>
                                    <th scope="col">Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.canciones.map(cancion => (
                                    <tr key={cancion.id}>
                                        <th scope="row">{cancion.id}</th>
                                        <td>{cancion.titulo}</td>
                                        <td>{cancion.duracion}</td>
                                        <td>
                                            {
                                                this.state.generos.map(genero => genero.id === cancion.genero_id ? genero.name : '')
                                            }
                                        </td>
                                        <td>
                                            {
                                                this.state.artistas.map(artista => artista.id === cancion.artista_id ? `${artista.nombre} ${artista.apellido}` : '')
                                            }
                                        </td>
                                        <td>
                                            {
                                                this.state.albums.map(album => {
                                                    return album.id === cancion.album_id ? album.nombre : ''
                                                })
                                            }
                                        </td>
                                        <td>
                                            <button className="btn btn-primary" style={{ margin: '4px' }} onClick={() => this.editCancion(cancion.id)}>
                                                <i className="material-icons">edit</i>
                                            </button>

                                            <button className="btn btn-danger" style={{ margin: '2px' }} onClick={() => this.deleteCancion(cancion.id)}>
                                                <i className="material-icons">delete</i>
                                            </button>
                                        </td>
                                        <td></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}