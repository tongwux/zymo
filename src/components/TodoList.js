import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Review project documentation', completed: false, priority: 'high' },
    { id: 2, text: 'Schedule team meeting', completed: false, priority: 'medium' },
    { id: 3, text: 'Update project timeline', completed: true, priority: 'high' },
    { id: 4, text: 'Prepare presentation for client', completed: false, priority: 'medium' },
    { id: 5, text: 'Send weekly progress report', completed: false, priority: 'low' },
  ]);

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="todo-list">
      <h2>To-Do List</h2>
      <div className="todos">
        {todos.map(todo => (
          <div 
            key={todo.id} 
            className={`todo-item ${todo.completed ? 'completed' : ''} priority-${todo.priority}`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className="todo-text">{todo.text}</span>
            <span className="priority-badge">{todo.priority}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList; 