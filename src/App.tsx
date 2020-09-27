import React from 'react';
import { TodoListItem } from './components/TodoListItem';

const todos: Array<Todo> = [
  { text: "Walk dog", complete: true },
  { text: "Build app", complete: false },
]

export const App: React.FC = () => {
  return (
    <div>
      <TodoListItem todo={todos[0]}/>
      <TodoListItem todo={todos[1]}/>
    </div>
  );
}


export default App;
