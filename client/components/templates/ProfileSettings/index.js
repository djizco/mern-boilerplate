import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptGetUser, attemptUpdateUser } from '_actions/user';
import ProfileSettingsContainer from './ProfileSettingsContainer';

const mapStateToProps = R.pick(['user', 'locations']);

const mapDispatchToProps = dispatch => ({
  attemptGetUser: () => dispatch(attemptGetUser()),
  attemptUpdateUser: user => dispatch(attemptUpdateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettingsContainer);
