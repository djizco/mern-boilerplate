import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptUpdateUser } from '_thunks/user';
import ChangeUsernameContainer from './ChangeUsernameContainer';

const mapStateToProps = R.pick(['user']);

const mapDispatchToProps = dispatch => ({
  attemptUpdateUser: user => dispatch(attemptUpdateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeUsernameContainer);
