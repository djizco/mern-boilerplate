import R from '_utils/ramda';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { attemptGetUser } from '_thunks/user';

import Main from './Main';

const mapStateToProps = R.pick(['alerts']);

const mapDispatchToProps = dispatch => ({
  attemptGetUser: () => dispatch(attemptGetUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Main));
