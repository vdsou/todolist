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
  }

  createTodo(newTodo) {
    const { todos } = this.state;
    const updatedTodos = [...todos, newTodo];
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
          <Todo key={todo.id} data={todo} />
        ))}
      </div>
    );
  }
}

export default App;
