import * as R from 'ramda';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import SettingsPageContainer from './SettingsPageContainer';

const mapStateToProps = R.pick(['user']);

const mapDispatchToProps = dispatch => ({
  pushToLogin: () => dispatch(push('/login')),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPageContainer);
