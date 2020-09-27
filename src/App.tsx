import React, { useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoList } from './components/TodoList';
import { TodoListItem } from './components/TodoListItem';

const initialTodos: Array<Todo> = [
  { text: "Walk dog", complete: true },
  { text: "Build app", complete: false },
]

export const App: React.FC = () => {

  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map(todo => {
      // If todo is the selected one
      if (todo === selectedTodo) {
        // return the todo obj with complete inverted
        return {
          ...todo,
          complete: !todo.complete
        }
      } else {
        // otherwise return without modification
        return todo
      }
    })
    // Use new todos array to set state
    setTodos(newTodos)
  }

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" && setTodos([...todos, {text: newTodo, complete: false}])
  }   

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <AddTodoForm addTodo={addTodo}/>
    </div>
  );
}


export default App;
