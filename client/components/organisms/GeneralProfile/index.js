import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptGetUser, attemptUpdateUser } from '_thunks/user';
import GeneralProfileContainer from './GeneralProfileContainer';

const mapStateToProps = R.pick(['user', 'locations']);

const mapDispatchToProps = dispatch => ({
  attemptGetUser: () => dispatch(attemptGetUser()),
  attemptUpdateUser: user => dispatch(attemptUpdateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GeneralProfileContainer);
