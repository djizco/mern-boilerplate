import R from '_utils/ramda';
import { connect } from 'react-redux';
import NavigationContainer from './NavigationContainer';

const mapStateToProps = R.pick(['user']);

export default connect(mapStateToProps)(NavigationContainer);
