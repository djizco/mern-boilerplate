import * as R from 'ramda';
import { connect } from 'react-redux';
import { attemptAddTodo } from '_thunks/todos';
import AddTodoContainer from './AddTodoContainer';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(attemptAddTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoContainer);
