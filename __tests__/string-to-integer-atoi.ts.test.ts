import { myAtoi } from "../solutions/string-to-integer-atoi"

describe('Function myAtoi', () => {
	test('should return 0 if there are no digits in the string', () => {
		expect(myAtoi("")).toBe(0)
		expect(myAtoi("word")).toBe(0)
		expect(myAtoi("  word  word")).toBe(0)
		expect(myAtoi("!@#$%^&*()~`'\":;,.<>/?")).toBe(0)
		expect(myAtoi("qwertyuiopasdfghjklzxcvbnm")).toBe(0)
		expect(myAtoi("QWERTYUIOPASDFGHJKLZXCVBNM")).toBe(0)
	})
	test('should return the correct number for a simple number in the string', () => {
		expect(myAtoi("0")).toBe(0)
		expect(myAtoi("1")).toBe(1)
		expect(myAtoi("234")).toBe(234)
		expect(myAtoi("5678")).toBe(5678)
		expect(myAtoi("90")).toBe(90)
	})
	test('should return the correct number for a number starting with spaces', () => {
		expect(myAtoi("   0")).toBe(0)
		expect(myAtoi("   234")).toBe(234)
		expect(myAtoi("   1962")).toBe(1962)
	})
	test('should return the correct number for a number starting with zeroes', () => {
		expect(myAtoi("0012")).toBe(12)
		expect(myAtoi("00234")).toBe(234)
		expect(myAtoi("   0001962")).toBe(1962)
	})
	test('should return the correct number for a number starting with +', () => {
		expect(myAtoi("+12")).toBe(12)
		expect(myAtoi("+00234")).toBe(234)
		expect(myAtoi("   +1962")).toBe(1962)
	})
	test('should return the correct number for a number starting with -', () => {
		expect(myAtoi("-12")).toBe(-12)
		expect(myAtoi("-00234")).toBe(-234)
		expect(myAtoi("   -1962")).toBe(-1962)
	})
	test('should return the correct number for edge values', () => {
		expect(myAtoi("2147483647")).toBe(2147483647)
		expect(myAtoi("2147483648")).toBe(2147483647)
		expect(myAtoi("-2147483648")).toBe(-2147483648)
		expect(myAtoi("-2147483649")).toBe(-2147483648)
	})
})
