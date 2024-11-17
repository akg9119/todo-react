import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import AddTodoList from './Components/AddTodoList';

function App() {
  const [todoList, setTodos] = useState([
    { sno: 1, title: "Buy Groceries", desc: "Purchase vegetables, fruits, and milk from the market." },
    { sno: 2, title: "Morning Exercise", desc: "Complete a 30-minute workout session." },
    { sno: 3, title: "Read a Book", desc: "Read at least 20 pages of the novel 'Atomic Habits'." },
  ]);

  const onDelete = (todo) => {
    setTodos(todoList.filter((e) => e !== todo));
  };

  const addTodo = (todo) => {
    const newTodo = { sno: todoList.length + 1, ...todo };
    setTodos([...todoList, newTodo]);
  };

  return (
    <div className="App">
      <Header title="My To-Do List" />
      <main className="container my-4">
        <div className="row">
          <div className="col-md-4">
            <AddTodoList addTodo={addTodo} />
          </div>

          <div className="col-md-8">
            <Todos todoList={todoList} onDelete={onDelete} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
