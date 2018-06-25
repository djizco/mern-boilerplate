import * as R from 'ramda';
import { connect } from 'react-redux';
import NavigationContainer from './NavigationContainer';

const mapStateToProps = R.pick(['user']);

export default connect(mapStateToProps)(NavigationContainer);
