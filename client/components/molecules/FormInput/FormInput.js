import React from 'react';
import PropTypes from 'prop-types';

export default function FormInput(props) {
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

FormInput.defaultProps = {
  leftIcon: undefined,
  type: 'text',
};

FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  type: PropTypes.string,
};
