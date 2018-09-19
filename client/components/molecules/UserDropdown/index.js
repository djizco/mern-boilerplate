import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptLogout } from '_actions/user';
import UserDropdown from './UserDropdown';

const mapStateToProps = R.pick(['user']);

const mapDispatchToProps = dispatch => ({
  attemptLogout: () => dispatch(attemptLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
