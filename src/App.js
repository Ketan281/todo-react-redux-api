import React from 'react';
import './App.css';
import {AddTodo} from "./components/AddTodo"
import {DisplayTodo} from "./components/DisplayTodo"
function App() {
  return (
    <div className="App">
      <>
      <AddTodo/>
    <DisplayTodo/>
      </>
    
    </div>
  );
}

export default App;
