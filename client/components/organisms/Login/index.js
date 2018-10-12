import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptLogin } from '_thunks/auth';
import LoginContainer from './LoginContainer';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
  attemptLogin: user => dispatch(attemptLogin(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
