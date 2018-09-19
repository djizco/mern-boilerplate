import R from '_utils/ramda';
import { connect } from 'react-redux';
import { attemptGetUser } from '_store/actions/user';
import RootContainer from './RootContainer';

const mapStateToProps = R.pick([]);

const mapDispatchToProps = dispatch => ({
  attemptGetUser: () => dispatch(attemptGetUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
