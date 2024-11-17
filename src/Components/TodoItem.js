import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.desc}</p>
        <button className="btn btn-danger" onClick={() => onDelete(todo)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
