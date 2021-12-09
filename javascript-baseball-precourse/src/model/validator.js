import NUMBER from '../constants/number.js';

const isNumberInRange = (value, minDigit, maxDigit) => {
  // return value >= minDigit && value <= maxDigit;
  return true;
};

const isNotDuplicatedNum = (value) => {
  const valueSet = new Set(value);

  return value.length === valueSet.size;
};

export const isValiUserInput = (value) => {
  return (
    !Number.isNaN(Number(value)) &&
    isNumberInRange(value, NUMBER.MIN_DIGIT, NUMBER.MAX_DIGIT) &&
    isNotDuplicatedNum(value)
  );
};
