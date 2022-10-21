import React from 'react';
import { AppUI } from './AppUI';
// import './App.css';

/* const defaultTodos = [
  { text: 'Elegir aguacate', completed: true },
  { text: 'Cortar aguacate', completed: false },
  { text: 'Hacer pure el aguacate', completed: true },
  { text: 'Servir', completed: false },
]; */

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1', JSON.stringify([]));
  let parsedTodos;

  if(!localStorageTodos){
    localStorageTodos = localStorage.setItem('TODOS_V1');
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }


  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const saveTodos = (newTodos) => {
    const savedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', savedTodos);
    setTodos(newTodos);
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  return (
    <AppUI 
      total={totalTodos}
      completed={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue} 
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
