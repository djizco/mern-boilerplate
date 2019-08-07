import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FormInput({
  className,
  onChange,
  value,
  placeholder,
  type,
  leftIcon,
  rightIcon,
}) {
  const fieldClasses = classNames({
    field: true,
    [className]: true,
  });

  const controlClasses = classNames({
    control: true,
    'has-icons-left': !!leftIcon,
    'has-icons-right': !!rightIcon,
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
        {rightIcon && (
          <span className="icon is-small is-right">
            <FontAwesomeIcon icon={rightIcon} />
          </span>
        )}
      </p>
    </div>
  );
}

FormInput.defaultProps = {
  className: '',
  leftIcon: undefined,
  rightIcon: undefined,
  type: 'text',
};

FormInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  leftIcon: PropTypes.object,
  rightIcon: PropTypes.object,
  type: PropTypes.string,
};
