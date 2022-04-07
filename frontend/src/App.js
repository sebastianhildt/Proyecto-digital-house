import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import CancionList from './components/CancionList';
import CancionCreate from './components/CancionCreate';
import Genero from './components/Genero';
import Album from './components/Album';
import Artista from './components/Artista';
import { useParams } from 'react-router-dom';
function App() {
    const params = useParams();
    return (
        <BrowserRouter>
            <Navigation />
            <div className="container p-4">
                <Routes>
                    <Route path="/" element={<CancionList />} />
                    <Route path="/canciones" element={<CancionList />} />
                    <Route path="/canciones/:id" params={params} element={<CancionCreate />} />
                    <Route path="/canciones/create" element={<CancionCreate />} />
                    {/* Propiedades */}
                    <Route path="/canciones/generos" element={<Genero />} />
                    <Route path="/canciones/album" element={<Album />} />
                    <Route path="/canciones/artista" element={<Artista />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;