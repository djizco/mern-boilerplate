import React from 'react';
import PropTypes from 'prop-types';

import SettingsMenu from '_organisms/SettingsMenu';

export default function SettingsPage(props) {
  const { location, children } = props;

  return (
    <div className="settings-page page">
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <SettingsMenu pathname={location.pathname} />
            </div>
            <div className="column">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SettingsPage.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
