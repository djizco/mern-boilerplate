import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { validateName } from '_utils/validation';
import GeneralProfile from './GeneralProfile';

export default class GeneralProfileContainer extends Component {
  static propTypes = {
    user: PropTypes.shape({
      usernameCase: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      bio: PropTypes.string,
      profilePic: PropTypes.string,
    }).isRequired,
    attemptGetUser: PropTypes.func.isRequired,
    attemptUpdateUser: PropTypes.func.isRequired,
  };

  state = {
    firstName: this.props.user.firstName || '',
    lastName: this.props.user.lastName || '',
    bio: this.props.user.bio || '',
    profilePic: this.props.user.profilePic || '',
    firstNameEdited: false,
    lastNameEdited: false,
    bioEdited: false,
    profilePicEdited: false,
  }

  resetState = () => this.setState({
    firstName: this.props.user.firstName || '',
    lastName: this.props.user.lastName || '',
    bio: this.props.user.bio || '',
    profilePic: this.props.user.profilePic || '',
    firstNameEdited: false,
    lastNameEdited: false,
    bioEdited: false,
    profilePicEdited: false,
  });

  updateFirstName = e => {
    if (validateName(e.target.value)) {
      this.setState({ firstName: e.target.value, firstNameEdited: true });
    }
  }

  updateLastName = e => {
    if (validateName(e.target.value)) {
      this.setState({ lastName: e.target.value, lastNameEdited: true });
    }
  }

  updateBio = e => this.setState({ bio: e.target.value, bioEdited: true })

  updateProfilePic = e => this.setState({ profilePic: e.target.value, profilePicEdited: true })

  refresh = () => {
    this.props.attemptGetUser()
      .then(() => this.resetState())
      .catch(R.identity);
  }

  save = () => {
    const updatedUser = {};

    if (this.state.firstNameEdited) { updatedUser.first_name = this.state.firstName; }
    if (this.state.lastNameEdited) { updatedUser.last_name = this.state.lastName; }
    if (this.state.profilePicEdited) { updatedUser.profile_pic = this.state.profilePic; }
    if (this.state.bioEdited) { updatedUser.bio = this.state.bio; }

    if (!R.isEmpty(updatedUser)) {
      this.props.attemptUpdateUser(updatedUser)
        .then(() => this.resetState())
        .catch(R.identity);
    }
  }

  render() {
    const {
      firstName, lastName, bio, profilePic, firstNameEdited, lastNameEdited,
      bioEdited, profilePicEdited,
    } = this.state;

    const edited = firstNameEdited || lastNameEdited || bioEdited || profilePicEdited;

    return (
      <GeneralProfile
        edited={edited}
        usernameCase={this.props.user.usernameCase}
        firstName={firstName}
        lastName={lastName}
        bio={bio}
        profilePic={profilePic}
        save={this.save}
        editProfile={this.editProfile}
        refresh={this.refresh}
        updateFirstName={this.updateFirstName}
        updateLastName={this.updateLastName}
        updateBio={this.updateBio}
        updateProfilePic={this.updateProfilePic}
      />
    );
  }
}
