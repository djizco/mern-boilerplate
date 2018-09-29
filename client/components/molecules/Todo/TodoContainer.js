import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Todo from './Todo';

export default class TodoContainer extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string,
    toggleCompleteTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

  static defaultProps = {
    updatedAt: undefined,
  };

  state = {
    text: this.props.text,
    edit: false,
    confirm: false,
    updatedMessage: '',
    createdMessage: '',
  }

  componentDidMount() {
    this.updateMessages();
    this.interval = window.setInterval(this.updateMessages, 1000);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ updatedMessage: moment(nextProps.updatedAt).fromNow() });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateMessages = () => this.setState({
    updatedMessage: this.props.updatedAt ? moment(this.props.updatedAt).fromNow() : '',
    createdMessage: moment(this.props.createdAt).fromNow(),
  })

  toggleCompleteTodo = () => this.props.toggleCompleteTodo(this.props.id)

  updateText = e => this.setState({ text: e.target.value })

  editTodo = () => this.setState({ edit: true })

  cancelEdit = () => this.setState({ text: this.props.text, edit: false })

  deleteTodo = () => this.props.deleteTodo(this.props.id)

  openModal = () => this.setState({ confirm: true })

  closeModal = () => this.setState({ confirm: false })

  updateTodo = () => {
    if (this.state.text) {
      this.setState({ edit: false });
      this.props.updateTodo({
        id: this.props.id,
        text: this.state.text,
      });
    }
  }

  render() {
    const { updatedAt, completed } = this.props;
    const { edit, confirm, createdMessage, updatedMessage } = this.state;

    return (
      <Todo
        completed={completed}
        confirm={confirm}
        edit={edit}
        updated={!!updatedAt}
        currentText={this.state.text}
        text={this.props.text}
        createdMessage={createdMessage}
        updatedMessage={updatedMessage}
        toggleCompleteTodo={this.toggleCompleteTodo}
        updateText={this.updateText}
        updateTodo={this.updateTodo}
        editTodo={this.editTodo}
        cancelEdit={this.cancelEdit}
        deleteTodo={this.deleteTodo}
        openModal={this.openModal}
        closeModal={this.closeModal}
      />
    );
  }
}
