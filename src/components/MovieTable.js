import React from 'react';

function MovieTable({ movies, onEdit, onDelete }) {
  return (
    <table className="table mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Gênero</th>
          <th>Diretor</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.id}</td>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.director}</td>
            <td>
              <button
                className="btn btn-sm btn-warning me-2"
                onClick={() => onEdit(movie)}
              >
                Editar
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(movie.id)}
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MovieTable;
