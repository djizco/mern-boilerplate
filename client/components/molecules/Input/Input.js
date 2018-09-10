import React from 'react';
import PropTypes from 'prop-types';

export default function Input(props) {
  const { onChange, value, placeholder, type, leftIcon } = props;

  return (
    <div className="field">
      <p className="control has-icons-left">
        <input
          className="input"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {leftIcon && (
          <span className="icon is-small is-left">
            <i className={`fa fa-${leftIcon}`} />
          </span>
        )}
      </p>
    </div>
  );
}

Input.defaultProps = {
  leftIcon: undefined,
  type: 'text',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  type: PropTypes.string,
};
