import { intToRoman } from "../solutions/integer-to-roman"

describe('intToRoman', () => {
  test('should converts 1 to I', () => {
    expect(intToRoman(1)).toBe('I');
  });

  test('should converts 4 to IV', () => {
    expect(intToRoman(4)).toBe('IV');
  });

  test('should converts 9 to IX', () => {
    expect(intToRoman(9)).toBe('IX');
  });

  test('should converts 40 to XL', () => {
    expect(intToRoman(40)).toBe('XL');
  });

  test('should converts 90 to XC', () => {
    expect(intToRoman(90)).toBe('XC');
  });

  test('should converts 400 to CD', () => {
    expect(intToRoman(400)).toBe('CD');
  });

  test('should converts 900 to CM', () => {
    expect(intToRoman(900)).toBe('CM');
  });

  test('should converts 3999 to MMMCMXCIX', () => {
    expect(intToRoman(3999)).toBe('MMMCMXCIX');
  });
});
