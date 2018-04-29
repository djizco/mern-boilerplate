import R from 'ramda';
import { connect } from 'react-redux';
import ChangeUsernameContainer from './ChangeUsernameContainer';
import { attemptUpdateUser } from '../../../store/actions/user';

const mapStateToProps = R.pick(['user']);

const mapDispatchToProps = dispatch => ({
  attemptUpdateUser: user => dispatch(attemptUpdateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeUsernameContainer);
