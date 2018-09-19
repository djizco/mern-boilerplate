import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FormInput(props) {
  const { className, onChange, value, placeholder, type, leftIcon } = props;

  const fieldClasses = classNames({
    field: true,
    [className]: true,
  });

  const controlClasses = classNames({
    control: true,
    'has-icons-left': !!leftIcon,
  });

  return (
    <div className={fieldClasses}>
      <p className={controlClasses}>
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {leftIcon && (
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={leftIcon} />
          </span>
        )}
      </p>
    </div>
  );
}

FormInput.defaultProps = {
  className: '',
  leftIcon: undefined,
  type: 'text',
};

FormInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  leftIcon: PropTypes.object,
  type: PropTypes.string,
};
