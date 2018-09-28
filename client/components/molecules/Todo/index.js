import * as R from 'ramda';
import { connect } from 'react-redux';
import { toggleCompleteTodo, updateTodo, hideTodo, deleteTodo } from '_store/actions/todos';
import TodoContainer from './TodoContainer';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
  toggleCompleteTodo: id => dispatch(toggleCompleteTodo(id)),
  updateTodo: (text, id) => dispatch(updateTodo(text, id)),
  hideTodo: id => dispatch(hideTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
