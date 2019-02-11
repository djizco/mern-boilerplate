import * as R from 'ramda';
import { connect } from 'react-redux';
import { attemptAddTodo } from '_thunks/todos';
import AddTodo from './AddTodo';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(attemptAddTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
