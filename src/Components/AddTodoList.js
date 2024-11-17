import React, { useState } from 'react';

const AddTodoList = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert('Both fields are required!');
      return;
    }
    addTodo({
      title,
      desc,
    });
    setTitle('');
    setDesc('');
  };

  return (
    <div className="add-todo">
      <h2 className="text-center mb-3">Add a New To-Do</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            placeholder="Enter To-Do Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <textarea
            id="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            placeholder="Enter To-Do Description"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Add To-Do</button>
      </form>
    </div>
  );
};

export default AddTodoList;
