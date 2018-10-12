import * as R from 'ramda';
import { connect } from 'react-redux';
import { attemptToggleCompleteTodo, attemptUpdateTodo, attemptDeleteTodo } from '_thunks/todos';
import TodoContainer from './TodoContainer';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
  toggleCompleteTodo: id => dispatch(attemptToggleCompleteTodo(id)),
  updateTodo: (text, id) => dispatch(attemptUpdateTodo(text, id)),
  deleteTodo: id => dispatch(attemptDeleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
