import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import R from 'ramda';
import { eventPath } from '../../../utils/polyfill';

eventPath();

export default class UserDropdown extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    closeDropdown: PropTypes.func.isRequired,
    attemptLogout: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    window.addEventListener('click', this.dropdownListener);
    window.addEventListener('touchend', this.dropdownListener);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.dropdownListener);
    window.removeEventListener('touchend', this.dropdownListener);
  }

  dropdownListener = e => !e.path.includes(this.dropdown) && this.props.closeDropdown();

  logout = () => {
    this.props.closeDropdown();
    this.props.attemptLogout()
      .catch(R.identity);
  }


  render() {
    const { user, closeDropdown, open } = this.props;

    return open && (
      <div className="dropdown box" ref={el => { this.dropdown = el; }}>
        <ul className="dropdown-list">
          <li className="dropdown-header">{user.usernameCase}</li>
          <hr className="dropdown-separator" />
          <li className="dropdown-item">
            <Link to="/settings" onClick={closeDropdown}>Settings</Link>
          </li>
          <hr className="dropdown-separator" />
          <li className="dropdown-item">
            <a onClick={this.logout} onKeyPress={this.logout}>Logout</a>
          </li>
        </ul>
      </div>
    );
  }
}
