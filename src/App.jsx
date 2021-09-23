import React from 'react';
import AddTodo from './components/AddTodo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
    this.createTodo = this.createTodo.bind(this);
  }

  createTodo(newTodo) {
    const { todos } = this.state;
    const updatedTodos = [...todos, newTodo];
    this.setState({
      todos: updatedTodos,
    });
  }

  render() {
    return <AddTodo onCreate={this.createTodo} />;
  }
}

export default App;
