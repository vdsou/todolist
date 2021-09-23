import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    const { title } = data;
    return (
      <div>
        {title}
        <input type="checkbox" />
        <button type="button">remove</button>
      </div>
    );
  }
}

Todo.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
}.isRequired;

export default Todo;
