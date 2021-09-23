import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      id: data.id,
      hasChecked: false,
    };
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleCheckbox(event) {
    const { onCheck } = this.props;
    const current = this.state;
    this.setState({
      hasChecked: event.target.checked,
    });
    onCheck({
      ...current,
      hasChecked: event.target.checked,
    });
  }

  render() {
    const { hasChecked } = this.state;
    const { data, onRemove } = this.props;
    const { title, id } = data;
    return (
      <div>
        {title}
        <input
          type="checkbox"
          onChange={this.handleCheckbox}
          checked={hasChecked}
        />
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
  onCheck: PropTypes.func,
}.isRequired;

export default Todo;
