import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ text: string; completed: boolean }[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <div className="app">
      <h1 className="header">todos</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <div className="footer">
        <span>{todos.filter(todo => !todo.completed).length} items left</span>
        <button onClick={() => setTodos(todos)}>All</button>
        <button onClick={() => setTodos(todos.filter(todo => !todo.completed))}>
          Active
        </button>
        <button onClick={() => setTodos(todos.filter(todo => todo.completed))}>
          Completed
        </button>
        <button onClick={clearCompleted}>Clear completed</button>
      </div>
    </div>
  );
};

export default App;
