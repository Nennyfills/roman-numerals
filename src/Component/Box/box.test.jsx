import React from 'react';
import { render } from '@testing-library/react';

import Box from './index';

test('renders a properly', () => {
  const { container } = render(<Box />);
  expect(container.firstChild).toMatchSnapshot(`
    <div />
  `);
});
