import R from 'ramda';
import { connect } from 'react-redux';
import RootContainer from './RootContainer';
import { attemptGetUser } from '../../store/actions/user';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
  attemptGetUser: () => dispatch(attemptGetUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
