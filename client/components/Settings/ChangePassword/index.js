import R from 'ramda';
import { connect } from 'react-redux';
import ChangePasswordContainer from './ChangePasswordContainer';

import { attemptUpdatePassword } from '../../../store/actions/user';

const mapStateToProps = R.pick(['user']);

const mapDispatchToProps = dispatch => ({
  attemptUpdatePassword: passwordInfo => dispatch(attemptUpdatePassword(passwordInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordContainer);
