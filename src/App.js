import React from "react";
import DevTools from "mobx-react-devtools";

import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";

const store = new TodoListModel();

const App = () => (
  <div>
    <DevTools />
    <TodoList store={store} />
  </div>
);

export default App;
