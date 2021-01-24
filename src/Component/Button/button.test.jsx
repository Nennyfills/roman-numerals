import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from './index';

describe('Test Button component', () => {
  test('renders a message', () => {
    const { container } = render(<Button />);
    expect(container.firstChild).toMatchSnapshot(`
      <div />
    `);
  });
  test('Test button clicked', () => {
    const { getByTestId } = render(<Button />);
    const btn = getByTestId('text');

    fireEvent.click(btn);
  });
});
