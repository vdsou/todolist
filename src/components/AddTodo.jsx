import React from 'react';
import PropTypes from 'prop-types';
import generateId from '../libs/generateId';

class AddTodo extends React.Component {
  constructor() {
    super();
    this.initialState = {
      id: 0,
      title: '',
      hasChecked: false,
    };
    this.state = this.initialState;
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    const id = generateId(999999);
    this.setState({
      id,
      title: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onCreate } = this.props;
    onCreate(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={title} onChange={this.handleInput} />
        <button type="submit">add</button>
      </form>
    );
  }
}

AddTodo.propTypes = {
  onCreate: PropTypes.func,
}.isRequired;

export default AddTodo;
