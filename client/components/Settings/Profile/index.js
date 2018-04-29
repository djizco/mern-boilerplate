import R from 'ramda';
import { connect } from 'react-redux';
import ProfileContainer from './ProfileContainer';
import { attemptGetUser, attemptUpdateUser } from '../../../store/actions/user';

const mapStateToProps = R.pick(['user', 'locations']);

const mapDispatchToProps = dispatch => ({
  attemptGetUser: () => dispatch(attemptGetUser()),
  attemptUpdateUser: user => dispatch(attemptUpdateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
