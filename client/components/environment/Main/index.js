import * as R from 'ramda';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainContainer from './MainContainer';

const mapStateToProps = R.pick(['alerts']);

export default connect(mapStateToProps)(withRouter(MainContainer));
