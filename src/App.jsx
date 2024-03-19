import { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoForm from './components/TodoForm';
import './App.css'

function App() {
  const [todos, setTodos] = useState([
      {
          text: "Learn about React",
          isCompleted: false,
      },{
          text: "Meet friend for lunch",
          isCompleted: false,
      },{
          text: "Build really cool todo app",
          isCompleted: false,
      }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = (index) => {
      const newTodos = [...todos];
      // newTodos[index].isCompleted = true;
      // Toggle the isCompleted property - no longer default true
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos);
  };
   
  // We are removing an item based on the index passed as an argument using the splice method ...
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // We have wrapped our return() as it spans multiple lines - shows where our return statement ends.
  return (
    // We have wrapped h1 + TodoItem inside div element (<>another way of div</>) - Rule 2: Only one HTML element is returned (regardless of how many elements are nested inside)
      <div className='app'>
          <h1 className='todo-list'>My todo list</h1>
          {todos.map((todo, index) => (
            <TodoItem
            key={index}  
            todo={todo} 
            completeTodo={completeTodo} 
            removeTodo={removeTodo}
            index={index}
            />
          ))}
          <TodoForm addTodo={addTodo} />
      </div>
  );
}

export default App;


