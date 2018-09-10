import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Box(props) {
  const { children, className } = props;

  const boxClasses = classNames({
    [className]: !!className,
    box: true,
  });

  return (
    <div className={boxClasses}>
      {children}
    </div>
  );
}

Box.defaultProps = {
  className: '',
};

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
  className: PropTypes.string,
};
