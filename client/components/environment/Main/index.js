import * as R from 'ramda';
import { connect } from 'react-redux';
import Main from './Main';

const mapStateToProps = R.pick(['alerts']);

export default connect(mapStateToProps)(Main);
