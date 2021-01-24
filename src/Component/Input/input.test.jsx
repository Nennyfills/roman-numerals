import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Input from './index';

describe('Test Input component', () => {
  test('renders a message', () => {
    const { container } = render(<Input type="text" />);
    expect(container.firstChild).toMatchSnapshot(`
      <div />
    `);
  });
  test('Test Input text', () => {
    const { getByTestId } = render(<Input type="text" />);
    const input = getByTestId('test');

    fireEvent.change(input, { target: { value: 'xxx' } });
  });
  test('Test Input number', () => {
    const { getByTestId } = render(<Input type="number" />);
    const input = getByTestId('test');

    fireEvent.change(input, { target: { value: 98 } });
  });
});
