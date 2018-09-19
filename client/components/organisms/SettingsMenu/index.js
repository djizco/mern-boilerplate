import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptLogout } from '_actions/user';
import SettingsMenuContainer from './SettingsMenuContainer';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
  attemptLogout: () => dispatch(attemptLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsMenuContainer);
