import React from "react"
import './App.css';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is sample todo",
      isDone: false
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
};

}

export default App;
