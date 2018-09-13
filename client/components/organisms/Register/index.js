import * as R from 'ramda';
import { connect } from 'react-redux';
import { attemptRegister } from '_actions/user';
import RegisterContainer from './RegisterContainer';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
  attemptRegister: newUser => dispatch(attemptRegister(newUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
