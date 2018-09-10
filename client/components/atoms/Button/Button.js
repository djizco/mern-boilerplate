import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Button(props) {
  const {
    handleClick, label, style, type, size, outlined, inverted,
    rounded, hovered, focused, active, loading, disabled,
  } = props;

  const typeMap = {
    info: 'is-info',
    primary: 'is-primary',
    success: 'is-success',
    warning: 'is-warning',
    danger: 'is-danger',
  };

  const sizeMap = {
    small: 'is-small',
    normal: '',
    medium: 'is-medium',
    large: 'is-large',
  };

  const isType = typeMap[type] || 'is-info';
  const isSize = sizeMap[size] || '';

  const buttonClasses = classNames({
    button: true,
    [isType]: true,
    [isSize]: true,
    'is-outlined': outlined,
    'is-inverted': inverted,
    'is-rounded': rounded,
    'is-hovered': hovered,
    'is-focused': focused,
    'is-active': active,
    'is-loading': loading,
    'is-static': props.static,
  });

  return (
    <button
      style={style}
      type="button"
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  style: PropTypes.object,
  handleClick: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  outlined: PropTypes.bool,
  inverted: PropTypes.bool,
  rounded: PropTypes.bool,
  hovered: PropTypes.bool,
  focused: PropTypes.bool,
  active: PropTypes.bool,
  loading: PropTypes.bool,
  static: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  style: {},
  label: '',
  type: 'info',
  size: 'normal',
  handleClick: () => {},
  outlined: false,
  inverted: false,
  rounded: false,
  hovered: false,
  focused: false,
  active: false,
  loading: false,
  static: false,
  disabled: false,
};
