import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import Home from './index';
import Input from '../../Component/Input';
import Button from '../../Component/Button';

describe('Home Page', () => {
  afterEach(cleanup);

  test('renders properly', () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toMatchSnapshot(`
      <div />
    `);
  });

  it('should call the handleChange function and change the state with input text', () => {
    const { getByTestId } = render(
      <Home>
        <Input type="text" />
      </Home>
    );

    const inputLetter = getByTestId('letter-convert');

    fireEvent.change(inputLetter, { target: { value: 'xxx' } });

    expect(inputLetter.value).toBe('xxx');
  });
  it('should call the handleChange function and change the state with input number', () => {
    const { getByTestId } = render(
      <Home>
        <Input type="number" />
      </Home>
    );

    const inputNumber = getByTestId('number-convert');
    fireEvent.change(inputNumber, { target: { value: '30' } });
    expect(inputNumber.value).toBe('30');
  });

  it('test if state is changed when button clicked with input text', () => {
    const { getByTestId } = render(
      <Home>
        <Button />
        <Input type="number" />
      </Home>
    );
    const inputLetter = getByTestId('letter-convert');
    const btn = getByTestId('letter-convert-btn');

    fireEvent.change(inputLetter, { target: { value: 'xxx' } });
    fireEvent.click(btn);
    expect(getByTestId('number-convert').value).toBe('30');
  });

  it('test if state is changed when button clicked with input number', () => {
    const { getByTestId } = render(
      <Home>
        <Button />
        <Input type="text" />
      </Home>
    );
    const inputNumber = getByTestId('number-convert');
    const btn = getByTestId('number-convert-btn');

    fireEvent.change(inputNumber, { target: { value: 300 } });
    fireEvent.click(btn);
    expect(getByTestId('letter-convert').value).toBe('ccc');
  });
});
