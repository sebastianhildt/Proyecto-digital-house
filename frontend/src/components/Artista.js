import React, { Component } from 'react'
import axios from 'axios'
export default class Artista extends Component {
    state = {
        canciones: [],
        titulo: '',
        duracion: '',
        genero: '',
        artista: '',
        album: ''
    }
    async componentDidMount() {
        this.getCancion();
        console.log(this.state.canciones);
    }
    getCancion = async () => {
        const res = await axios.get('http://localhost:4000/canciones');
        this.setState({ canciones: res.data.data })
    }
    onChangeTitulo = (e) => {
        this.setState({
            titulo: e.target.value
        })
    }
    onChangeDuracion = (e) => {
        this.setState({
            duracion: e.target.value
        })
    }
    onChangeGenero = (e) => {
        this.setState({
            genero: e.target.value
        })
    }

    onChangeArtista = (e) => {
        this.setState({
            artista: e.target.value
        })
    }
    onChangeAlbum = (e) => {
        this.setState({
            album: e.target.value
        })
    }

    saveCancion = async e => {
        e.preventDefault();
        await axios.post('http://localhost:4000/canciones', {
            titulo: this.state.titulo,
            duracion: this.state.duracion,
            artista_id: this.state.artista,
            album_id: this.state.album,
            genero_id: this.state.genero
        })
        this.setState({
            titulo: '',
            duracion: '',
            genero: '',
            artista: '',
            album: ''
        });
        this.getCancion();
    }
    deleteCancion = async (id) => {
        await axios.delete(`http://localhost:4000/canciones/${id}`);
        this.getCancion();
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Crear Canción</h3>
                        <form onSubmit={this.saveCancion}>
                            <div className="form-group mb-4">
                                <label htmlFor="titulo">Titulo:</label>
                                <input type="text" id="titulo" className='form-control' onChange={this.onChangeTitulo} value={this.state.titulo} />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="ducracion">Duracion:</label>
                                <input type="text" id='duracion' className='form-control' onChange={this.onChangeDuracion} value={this.state.duracion} />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="genero">Genero:</label>
                                <input type="text" id='genero' className='form-control' onChange={this.onChangeGenero} value={this.state.genero} />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="artista">Artista:</label>
                                <input type="text" id='artista' className='form-control' onChange={this.onChangeArtista} value={this.state.artista} />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="album">Album:</label>
                                <input type="text" id="album" className='form-control' onChange={this.onChangeAlbum} value={this.state.album} />
                            </div>
                            <button type="submit" className='btn btn-primary'>Guardar</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list group">
                        {
                            this.state.canciones.map(cancion => (
                                <li className='list-group-item list-group-item.action' key={cancion.id} onDoubleClick={() => this.deleteCancion(cancion.id)}>
                                    {cancion.titulo}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}