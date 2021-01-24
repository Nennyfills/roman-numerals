import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({
  name, onClick, disabled, btnId
}) => (
  <div className="button">
    <button
      type="submit"
      id={btnId}
      data-testid={btnId}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  </div>
);

Button.defaultProps = {
  name: 'name',
  onClick: () => 'click',
  disabled: true,
  btnId: 'text',
};
Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  btnId: PropTypes.string,
};
export default Button;
