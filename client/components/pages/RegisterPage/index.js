import R from '_utils/ramda';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import RegisterPage from './RegisterPage';

const mapStateToProps = R.pick(['user']);

const mapDispatchToProps = dispatch => ({
  pushToHome: () => dispatch(push('/home')),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
