import React from 'react';
import './TodoList.css';

interface TodoListProps {
  todos: { text: string; completed: boolean }[];
  toggleTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li
          key={index}
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
          onClick={() => toggleTodo(index)}
        >
          <span className="todo-checkbox">{todo.completed ? '✓' : '○'}</span>
          <span className={`todo-text ${todo.completed ? 'completed-text' : ''}`}>
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
