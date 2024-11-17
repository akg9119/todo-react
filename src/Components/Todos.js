import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todoList, onDelete }) => {
  return (
    <div className="todos">
      <h2 className="text-center mb-4">Your To-Do List</h2>
      {todoList.length === 0 ? (
        <p className="text-center text-muted">No To-Dos Available!</p>
      ) : (
        todoList.map((todo) => (
          <TodoItem todo={todo} key={todo.sno} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default Todos;
