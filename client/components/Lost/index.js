import R from 'ramda';
import { connect } from 'react-redux';
import Lost from './Lost';

const mapStateToProps = R.pick();

export default connect(mapStateToProps)(Lost);
