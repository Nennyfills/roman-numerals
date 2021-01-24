import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ children }) => (
  <div className="box">
    <div className="box_header">Roman Numeral Converter</div>
    {children}
  </div>
);

Box.defaultProps = {
  children: <div />,
};
Box.propTypes = {
  children: PropTypes.element,
};
export default Box;
