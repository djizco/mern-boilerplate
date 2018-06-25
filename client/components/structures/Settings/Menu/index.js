import * as R from 'ramda';
import { connect } from 'react-redux';
import { attemptLogout } from '_store/actions/user';
import MenuContainer from './MenuContainer';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
  attemptLogout: () => dispatch(attemptLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);
