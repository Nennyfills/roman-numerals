import swal from 'sweetalert';

const data = {
  1: 'i',
  2: 'ii',
  3: 'iii',
  4: 'iv',
  5: 'v',
  6: 'vi',
  7: 'vii',
  8: 'viii',
  9: 'ix',
  10: 'x',
  20: 'xx',
  30: 'xxx',
  40: 'xl',
  50: 'l',
  60: 'lx',
  70: 'lxx',
  80: 'lxxx',
  90: 'xc',
  100: 'c',
  200: 'cc',
  300: 'ccc',
  400: 'cd',
  500: 'd',
  600: 'dc',
  700: 'dcc',
  800: 'dcc',
  900: 'cm',
  1000: 'm',
  2000: 'mm',
  3000: 'mmm',
  4000: 'mmmm',
};

export const getNumberPlaceValue = (inputValue, arr = [], multiple = 1) => {
  if (inputValue) {
    return getNumberPlaceValue(
      Math.floor(inputValue / 10),
      [multiple * (inputValue % 10)].concat(arr),
      multiple * 10
    );
  }

  return arr;
};

export const getRomanPlaceValue = (inputValue) => {
  if (!inputValue || typeof inputValue !== 'string') return;
  const arr = inputValue.toLowerCase().split``.map((value) => Object.keys(data).find((key) => data[key] === value));

  // eslint-disable-next-line consistent-return
  return Array(Math.ceil(arr.length / 2))
    .fill('')
    .map(() => arr.splice(0, 2), arr.slice());
};

export const RomanNumerals = {
  toRoman: (numerals) => {
    if (!numerals) {
      swal('Roman Numerals', 'A value is required', 'error');
      return false;
    }
    if (!/^(([1-4][0-9]{0,3})|([1-9][0-9]{0,2})|(4999))*$/.test(numerals)) {
      swal('Roman Numerals', 'Try a value that is below 4999', 'error');
      return false;
    }
    const values = getNumberPlaceValue(numerals);

    return values.map((value) => data[value]).join``;
  },

  fromRoman: (input) => {
    if (!input) {
      swal('Roman Numerals', 'A value is required', 'error');
      return false;
    }
    if (
      !/^m*(?:d?C{0,3}|c[md])(?:l?x{0,3}|x[cl])(?:v?i{0,3}|i[xv])$/.test(input)
    ) {
      swal('Roman Numerals', `${input} is an invalid roman numeral`, 'error');
      return false;
    }
    const result = getRomanPlaceValue(input).map((val) => {
      if (val.length === 2) {
        if (+val[0] < +val[1]) {
          return (+val[1] - +val[0]);
        } return (+val[0] + +val[1]);
      } return +val[0];
    });
    return result.reduce((firstValue, SecondValue) => firstValue + SecondValue);
  },
};
