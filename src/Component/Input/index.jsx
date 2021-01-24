import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = ({
  type,
  label,
  placeholder,
  handleChange,
  name,
  value,
  inputId,
}) => (
  <div className="input">
    <label htmlFor={inputId}>{label}</label>
    <input
      data-testid={inputId}
      id={inputId}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      autoComplete="off"
    />
  </div>
);

Input.defaultProps = {
  label: '',
  placeholder: '',
  name: '',
  value: '',
  handleChange: () => 'handleChange',

  inputId: 'test',
};
Input.propTypes = {
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  inputId: PropTypes.string,
};
export default Input;
