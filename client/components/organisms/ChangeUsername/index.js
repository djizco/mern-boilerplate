import * as R from 'ramda';
import { connect } from 'react-redux';
import { attemptUpdateUser } from '_actions/user';
import ChangeUsernameContainer from './ChangeUsernameContainer';

const mapStateToProps = R.pick(['user']);

const mapDispatchToProps = dispatch => ({
  attemptUpdateUser: user => dispatch(attemptUpdateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeUsernameContainer);
