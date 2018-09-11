import * as R from 'ramda';
import { connect } from 'react-redux';
import { attemptLogout } from '_store/actions/user';
import UserDropdown from './UserDropdown';

const mapStateToProps = R.pick(['user']);

const mapDispatchToProps = dispatch => ({
  attemptLogout: () => dispatch(attemptLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
