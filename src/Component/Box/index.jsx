import React from 'react';
import PropTypes from 'prop-types';

import './box.scss';

const Box = ({ children, boxStyles }) => (
  <div className={`box ${boxStyles || ''}`}>{children}</div>
);

Box.defaultProps = {
  children: <div />,
  boxStyles: '',
};
Box.propTypes = {
  children: PropTypes.element,
  boxStyles: PropTypes.string,
};
export default Box;
