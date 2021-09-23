import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data, onRemove } = this.props;
    const { title, id } = data;
    return (
      <div>
        {title}
        <input type="checkbox" />
        <button type="button" onClick={() => onRemove(id)}>
          remove
        </button>
      </div>
    );
  }
}

Todo.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
  onRemove: PropTypes.func,
}.isRequired;

export default Todo;
