import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Field from 'react-bulma-companion/lib/Field';
import Control from 'react-bulma-companion/lib/Control';
import Input from 'react-bulma-companion/lib/Input';
import Icon from 'react-bulma-companion/lib/Icon';

export default function FormInput({
  className,
  onChange,
  value,
  placeholder,
  type,
  leftIcon,
  rightIcon,
}) {
  return (
    <Field className={className}>
      <Control iconsLeft={!!leftIcon} iconsRight={!!rightIcon}>
        <Input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {leftIcon && (
          <Icon size="small" align="left">
            <FontAwesomeIcon icon={leftIcon} />
          </Icon>
        )}
        {rightIcon && (
          <Icon size="small" align="left">
            <FontAwesomeIcon icon={rightIcon} />
          </Icon>
        )}
      </Control>
    </Field>
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
