import React from 'react';
import { render } from '@testing-library/react';

import App from './index';

test('renders a properly', () => {
  const { container, getAllByText } = render(<App />);
  expect(getAllByText('Convert')).toHaveLength(2);
  expect(container.firstChild).toMatchSnapshot(`
    <Home />
  `);
});
