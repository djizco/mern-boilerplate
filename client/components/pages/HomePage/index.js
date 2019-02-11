import R from '_utils/ramda';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import HomePage from './HomePage';

const mapStateToProps = R.pick(['user']);

const mapDispatchToProps = dispatch => ({
  pushToLogin: () => dispatch(push('/login')),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
