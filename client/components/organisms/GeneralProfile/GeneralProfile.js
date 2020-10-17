import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import R from 'ramda';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons/faSync';

import Box from 'react-bulma-companion/lib/Box';
import Icon from 'react-bulma-companion/lib/Icon';
import Title from 'react-bulma-companion/lib/Title';
import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';
import Button from 'react-bulma-companion/lib/Button';
import Image from 'react-bulma-companion/lib/Image';
import Field from 'react-bulma-companion/lib/Field';
import Control from 'react-bulma-companion/lib/Control';
import Textarea from 'react-bulma-companion/lib/Textarea';
import Label from 'react-bulma-companion/lib/Label';
import Help from 'react-bulma-companion/lib/Help';
import Input from 'react-bulma-companion/lib/Input';

import { validateName } from '_utils/validation';
import { attemptGetUser, attemptUpdateUser } from '_thunks/user';

export default function GeneralProfile() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  const [firstName, setFirstName] = useState(user.firstName || '');
  const [lastName, setLastName] = useState(user.lastName || '');
  const [bio, setBio] = useState(user.bio || '');
  const [profilePic, setProfilePic] = useState(user.profilePic || '');
  const [firstNameEdited, setFirstNameEdited] = useState(false);
  const [lastNameEdited, setLastNameEdited] = useState(false);
  const [bioEdited, setBioEdited] = useState(false);
  const [profilePicEdited, setProfilePicEdited] = useState(false);

  const resetState = () => {
    setFirstName(user.firstName || '');
    setLastName(user.lastName || '');
    setBio(user.bio || '');
    setProfilePic(user.profilePic || '');
    setFirstNameEdited(false);
    setLastNameEdited(false);
    setBioEdited(false);
    setProfilePicEdited(false);
  };

  useEffect(() => {
    resetState();
  }, [user.firstName, user.lastName, user.bio, user.profilePic]);

  const updateFirstName = e => {
    if (validateName(e.target.value)) {
      setFirstName(e.target.value);
      setFirstNameEdited(true);
    }
  };

  const updateLastName = e => {
    if (validateName(e.target.value)) {
      setLastName(e.target.value);
      setLastNameEdited(true);
    }
  };

  const updateBio = e => {
    setBio(e.target.value);
    setBioEdited(true);
  };

  const updateProfilePic = e => {
    setProfilePic(e.target.value);
    setProfilePicEdited(true);
  };

  const refresh = () => dispatch(attemptGetUser())
    .then(resetState)
    .catch(R.identity);

  const save = () => {
    const updatedUser = {};

    if (firstNameEdited) { updatedUser.first_name = firstName; }
    if (lastNameEdited) { updatedUser.last_name = lastName; }
    if (profilePicEdited) { updatedUser.profile_pic = profilePic; }
    if (bioEdited) { updatedUser.bio = bio; }

    if (!R.isEmpty(updatedUser)) {
      dispatch(attemptUpdateUser(updatedUser))
        .catch(R.identity);
    }
  };

  const charactersRemaining = 240 - bio.length;
  const edited = firstNameEdited || lastNameEdited || bioEdited || profilePicEdited;

  return (
    <Box className="general-profile">
      <Icon size="medium" className="is-pulled-right" onClick={refresh} onKeyPress={refresh}>
        <FontAwesomeIcon icon={faSync} size="lg" />
      </Icon>
      <Title size="3">
        General
      </Title>
      <hr className="separator" />
      <Columns>
        <Column size="4">
          <Title size="3" className="has-text-centered">
            {user.usernameCase}
          </Title>
          <Image>
            <Image.Content
              className="profile-img"
              src={profilePic || '/images/default-profile.png'}
              alt="Profile"
            />
          </Image>
          <Field>
            <Label htmlFor="profile-pic-url">
              Picture URL
            </Label>
            <Control>
              <Input
                id="profile-pic-url"
                placeholder="Picture URL"
                value={profilePic}
                onChange={updateProfilePic}
              />
            </Control>
          </Field>
        </Column>
        <Column size="8">
          <Columns>
            <Column size="6">
              <Field>
                <Label htmlFor="first-name" className="Label">
                  First Name
                </Label>
                <Control>
                  <Input
                    id="first-name"
                    placeholder="First Name"
                    value={firstName}
                    onChange={updateFirstName}
                  />
                </Control>
              </Field>
            </Column>
            <Column size="6">
              <Field>
                <Label htmlFor="last-name">
                  Last Name
                </Label>
                <Control>
                  <Input
                    id="last-name"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={updateLastName}
                  />
                </Control>
              </Field>
            </Column>
          </Columns>
          <Field>
            <Label htmlFor="bio">
              Bio
            </Label>
            <Control>
              <Textarea
                id="bio"
                placeholder="Tell us about yourself."
                value={bio}
                maxLength={240}
                onChange={updateBio}
              />
            </Control>
            <Help>
              {`Characters remaining: ${charactersRemaining}`}
            </Help>
          </Field>
        </Column>
      </Columns>
      <hr className="separator" />
      <Button color="success" onClick={save} disabled={!edited}>
        Save
      </Button>
    </Box>
  );
}
