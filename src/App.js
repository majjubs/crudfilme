import React, { useState } from 'react';
import MovieForm from './components/MovieForm';
import MovieTable from './components/MovieTable';
import { getMovies, saveMovie, deleteMovie as deleteMovieFromStorage } from './services/localStorageService';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  const [movies, setMovies] = useState(() => getMovies());
  const [movieToEdit, setMovieToEdit] = useState(null);
  const [nextId, setNextId] = useState(() => {
    const savedMovies = getMovies();
    const maxId = savedMovies.length > 0 ? Math.max(...savedMovies.map(m => m.id)) : 0;
    return maxId + 1;
  });

  const [showModal, setShowModal] = useState(false);  // Para controlar o modal

  const openModal = (movie = null) => {
    setMovieToEdit(movie);
    setShowModal(true); // Abre o modal
  };

  const closeModal = () => {
    setMovieToEdit(null);
    setShowModal(false); // Fecha o modal
  };

  const addMovie = (movie) => {
    const newMovie = { ...movie, id: nextId };
    const updatedMovies = [...movies, newMovie];
    setMovies(updatedMovies);
    saveMovie(newMovie);
    setNextId(nextId + 1);
    closeModal();
  };

  const updateMovie = (updatedMovie) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === updatedMovie.id ? updatedMovie : movie
    );
    setMovies(updatedMovies);
    localStorage.setItem('movies', JSON.stringify(updatedMovies));
    closeModal();
  };

  const deleteMovie = (id) => {
    const updated = movies.filter((movie) => movie.id !== id);
    setMovies(updated);
    deleteMovieFromStorage(id);
  };

  return (
    <div className="container mt-4 text-white">
      <h1 className="mb-4">🎬 Catálogo de Filmes</h1>

      {/* Botão para abrir o modal */}
      <button className="btn btn-danger mb-4" onClick={() => openModal()}>
        Adicionar Filme
      </button>

      {/* Tabela de filmes */}
      <MovieTable
        movies={movies}
        onEdit={openModal}
        onDelete={deleteMovie}
      />

      {/* Modal para formulário */}
      {showModal && (
        <div className="custom-modal-backdrop">
          <div className="custom-modal">
            <div className="custom-modal-header">
              <h5>{movieToEdit ? 'Editar Filme' : 'Adicionar Filme'}</h5>
              {/* Botão de fechar */}
              <button className="btn-close btn-close-white" onClick={closeModal}></button>
            </div>
            <div className="custom-modal-body">
              <MovieForm
                addMovie={addMovie}
                updateMovie={updateMovie}
                movieToEdit={movieToEdit}
              />
            </div>
            <div className="custom-modal-footer">
              {/* Botão de fechar do modal */}
              <button className="btn btn-secondary" onClick={closeModal}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
