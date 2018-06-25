import * as R from 'ramda';
import { connect } from 'react-redux';
import { attemptUpdatePassword } from '_store/actions/user';
import ChangePasswordContainer from './ChangePasswordContainer';


const mapStateToProps = R.pick(['user']);

const mapDispatchToProps = dispatch => ({
  attemptUpdatePassword: passwordInfo => dispatch(attemptUpdatePassword(passwordInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordContainer);
