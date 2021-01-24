import { RomanNumerals, getNumberPlaceValue, getRomanPlaceValue } from '.';

describe('Test helper function', () => {
  it('check if the number place value', () => {
    expect(getNumberPlaceValue(30)).toBeDefined();
  });
  it('should get number place value', () => {
    expect(getNumberPlaceValue(30)).toEqual(expect.arrayContaining([30, 0]));
  });
  it('should check wrong expectation of number place value', () => {
    expect(getNumberPlaceValue(20)).not.toEqual(
      expect.arrayContaining([30, 0])
    );
  });

  it('check if the roman numerals place value is defined', () => {
    expect(getRomanPlaceValue('xxx')).toBeDefined();
  });
  it('check if the value is empty', () => {
    expect(getRomanPlaceValue()).toEqual(undefined);
  });
  it('check if the value is not a string', () => {
    expect(getRomanPlaceValue(789)).toEqual(undefined);
  });
  it('should get roman numerals place value', () => {
    expect(getRomanPlaceValue('xxx')).toEqual(
      expect.arrayContaining([['10', '10'], ['10']])
    );
  });
  it('should check wrong expectation of roman numerals place value', () => {
    expect(getRomanPlaceValue('xxx')).not.toEqual(
      expect.arrayContaining([30, 0])
    );
  });

  it('check if the convert numerals is defined', () => {
    expect(RomanNumerals.toRoman(30)).toBeDefined();
  });
  it('should convert numerals', () => {
    expect(RomanNumerals.toRoman(30)).toEqual('xxx');
  });
  it('should not convert numerals', () => {
    expect(RomanNumerals.toRoman(20)).not.toEqual('xxx');
  });
  it('check if the value is not a string', () => {
    expect(RomanNumerals.toRoman('kkkk')).toEqual(expect.objectContaining({}));
  });
  it('check if the value is empty', () => {
    expect(RomanNumerals.toRoman()).toEqual(expect.objectContaining({}));
  });

  it('check if the convert number is defined', () => {
    expect(RomanNumerals.fromRoman('xxx')).toBeDefined();
  });
  it('should convert number', () => {
    expect(RomanNumerals.fromRoman('xxx')).toEqual(30);
  });
  it('should not convert number', () => {
    expect(RomanNumerals.fromRoman('xxx')).not.toEqual(20);
  });
  it('check if the value is not a string', () => {
    expect(RomanNumerals.fromRoman(5556)).toEqual(expect.objectContaining({}));
  });
  it('check more complicated value', () => {
    expect(RomanNumerals.fromRoman('cdxliv')).toEqual(444);
  });
  it('check if the value is empty', () => {
    expect(RomanNumerals.fromRoman()).toEqual(expect.objectContaining({}));
  });
});
