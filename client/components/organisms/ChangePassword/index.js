import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptUpdatePassword } from '_actions/user';
import ChangePasswordContainer from './ChangePasswordContainer';


const mapStateToProps = R.pick(['user']);

const mapDispatchToProps = dispatch => ({
  attemptUpdatePassword: passwordInfo => dispatch(attemptUpdatePassword(passwordInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordContainer);
