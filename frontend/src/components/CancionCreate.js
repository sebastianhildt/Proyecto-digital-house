import React, { Component } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
class CancionCreate extends Component {
    state = {
        generos: [],
        artistas: [],
        albums: [],
        titulo: '',
        duracion: '',
        genero: '',
        artista: '',
        album: '',
        editing: false,
        id: ''
    }
    async componentDidMount() {
        this.getGenero();
        this.getArtista();
        this.getAlbum();
        const { id } = this.props.params;
        if (id) {
            const res = await axios.get(`http://localhost:4000/canciones/${id}`);
            console.log(res.data);

            this.setState({
                titulo: res.data.titulo,
                duracion: res.data.duracion,
                genero: res.data.genero_id,
                artista: res.data.artista_id,
                album: res.data.album_id,
                editing: true,
                id
            })
        }
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
    submitCancion = async (e) => {
        e.preventDefault();
        const newCancion = {
            titulo: this.state.titulo,
            duracion: this.state.duracion,
            artista_id: this.state.artista,
            album_id: this.state.album,
            genero_id: this.state.genero
        }
        if (this.state.editing) {
            await axios.put(`http://localhost:4000/canciones/${this.state.id}`, newCancion)
        } else {
            await axios.post('http://localhost:4000/canciones', newCancion)
        }
        window.location.href = '/canciones';
    }

    onChangeAll = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Crear Canción</h4>
                    {/** SELECT GENERO */}
                    <form onSubmit={this.submitCancion}>
                        <div className="form-group mb-4">
                            <label htmlFor="titulo">Titulo:</label>
                            <input type="text" id="titulo" className='form-control' name="titulo" onChange={this.onChangeAll} value={this.state.titulo} />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="ducracion">Duracion:</label>
                            <input type="text" id='duracion' className='form-control' name="duracion" onChange={this.onChangeAll} value={this.state.duracion} />
                        </div>

                        <div className="form_group mb-4">
                            <select className="form-select" aria-label="Default select example" name="genero" onChange={this.onChangeAll} value={this.state.genero}>
                                <option value="">-- Generos --</option>
                                {
                                    this.state.generos.map(genero => (
                                        <option value={genero.id} key={genero.id}>
                                            {genero.name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="form_group mb-4">
                            <select className="form-select" aria-label="Default select example" name="artista" onChange={this.onChangeAll} value={this.state.artista}>
                                <option value="">-- Artistas --</option>
                                {
                                    this.state.artistas.map(artista => (
                                        <option value={artista.id} key={artista.id}>
                                            {`${artista.nombre} ${artista.apellido} `}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                        <div className="form_group mb-4">
                            <select className="form-select" aria-label="Default select example" name="album" onChange={this.onChangeAll} value={this.state.album}>
                                <option value="">-- Albums --</option>
                                {
                                    this.state.albums.map(album => (
                                        <option value={album.id} key={album.id}>
                                            {album.nombre}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <button type='submit' className='btn btn-primary'>Guardar</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default withParams(CancionCreate);

