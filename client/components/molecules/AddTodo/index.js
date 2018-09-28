import * as R from 'ramda';
import { connect } from 'react-redux';
import { addTodoAndIncrementId } from '_actions/todos';
import AddTodoContainer from './AddTodoContainer';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodoAndIncrementId(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoContainer);
