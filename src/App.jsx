import React from 'react';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
    this.createTodo = this.createTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateCheckbox = this.updateCheckbox.bind(this);
  }

  createTodo(newTodo) {
    const { todos } = this.state;
    const updatedTodos = [...todos, newTodo];
    this.setState({
      todos: updatedTodos,
    });
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  removeTodo(TodoIdToRemove) {
    const { todos } = this.state;
    const updatedTodos = todos.filter((todo) => todo.id !== TodoIdToRemove);
    this.setState({
      todos: updatedTodos,
    });
  }

  updateCheckbox(updatedCheckboxData) {
    const { todos } = this.state;
    const updatedTodos = todos.map((todo) => {
      const toUpdate = todo;
      if (toUpdate.id === updatedCheckboxData.id) {
        toUpdate.hasChecked = updatedCheckboxData.hasChecked;
      }
      return toUpdate;
    });
    this.setState({
      todos: updatedTodos,
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <AddTodo onCreate={this.createTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            data={todo}
            onRemove={this.removeTodo}
            onCheck={this.updateCheckbox}
          />
        ))}
      </div>
    );
  }
}

export default App;
