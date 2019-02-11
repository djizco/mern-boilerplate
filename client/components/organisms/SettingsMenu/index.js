import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptLogout } from '_thunks/auth';
import SettingsMenu from './SettingsMenu';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
  attemptLogout: () => dispatch(attemptLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsMenu);
