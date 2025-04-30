import React from 'react';
import { Button } from 'react-bootstrap';
import { deleteMovie } from '../services/localStorageService';

const MovieItem = ({ movie, onMovieDeleted }) => {
  const handleDelete = () => {
    deleteMovie(movie.titulo);
    onMovieDeleted();
  };

  return (
    <tr>
      <td>{movie.titulo}</td>
      <td>{movie.diretor}</td>
      <td>{movie.anoLancamento}</td>
      <td>{movie.genero}</td>
      <td>
        <Button variant="danger" onClick={handleDelete}>Excluir</Button>
      </td>
    </tr>
  );
};

export default MovieItem;