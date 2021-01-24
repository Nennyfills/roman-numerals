import React, { useState } from 'react';

import Box from '../../Component/Box';
import Button from '../../Component/Button';
import Input from '../../Component/Input';
import { RomanNumerals } from '../../Helpers';
import './home.scss';

const Home = () => {
  const [letter, setLetter] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    const changeValue = target.name === 'number'
      ? setNumber(target.value)
      : setLetter(target.value);
    return changeValue;
  };

  const handleLetterConvert = () => {
    const result = RomanNumerals.fromRoman(letter);
    setNumber(result);
  };
  const handleNumberConvert = () => {
    const result = RomanNumerals.toRoman(+number);
    setLetter(result);
  };

  return (
    <div className="home">
      <Box>
        <div className="home_action">
          <div className="action_numerals">
            <Input
              inputId="letter-convert"
              type="text"
              name="letter"
              label="Enter a valid roman numerals"
              value={letter}
              placeholder=""
              handleChange={handleChange}
            />
            <Button
              btnId="letter-convert-btn"
              onClick={handleLetterConvert}
              disabled={!letter}
              name="Convert"
            />
          </div>
          <div className="action_number">
            <Input
              inputId="number-convert"
              type="number"
              name="number"
              label="Enter a number"
              value={number}
              placeholder=""
              handleChange={handleChange}
            />
            <Button
              btnId="number-convert-btn"
              onClick={handleNumberConvert}
              disabled={!number}
              name="Convert"
            />
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Home;
