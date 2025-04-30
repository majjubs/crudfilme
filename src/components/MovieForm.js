import React, { useState, useEffect } from 'react';

function MovieForm({ addMovie, updateMovie, movieToEdit }) {
  const [movie, setMovie] = useState({ title: '', genre: '', director: '' });

  useEffect(() => {
    if (movieToEdit) {
      setMovie({
        title: movieToEdit.title,
        genre: movieToEdit.genre,
        director: movieToEdit.director,
      });
    } else {
      setMovie({ title: '', genre: '', director: '' });
    }
  }, [movieToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (movieToEdit) {
      updateMovie({ ...movie, id: movieToEdit.id });
    } else {
      addMovie(movie);
    }

    setMovie({ title: '', genre: '', director: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Título</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={movie.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Gênero</label>
        <input
          type="text"
          className="form-control"
          name="genre"
          value={movie.genre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Diretor</label>
        <input
          type="text"
          className="form-control"
          name="director"
          value={movie.director}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {movieToEdit ? 'Atualizar Filme' : 'Adicionar Filme'}
      </button>
    </form>
  );
}

export default MovieForm;
