import * as R from 'ramda';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import WelcomePageContainer from './WelcomePageContainer';

const mapStateToProps = R.pick(['user']);
const mapDispatchToProps = dispatch => ({
  pushToHome: () => dispatch(push('/home')),
});

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePageContainer);
