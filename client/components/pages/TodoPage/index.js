import R from '_utils/ramda';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { attemptGetTodos } from '_actions/todos';
import TodoPageContainer from './TodoPageContainer';

const mapStateToProps = R.pick(['user']);

const mapDispatchToProps = dispatch => ({
  pushToLogin: () => dispatch(push('/login')),
  getTodos: () => dispatch(attemptGetTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPageContainer);
