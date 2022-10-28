/**
 * Implementation of atoi function.
 * (Converts the string argument s to an integer (type int (number)).)
 *
 * Runtime: 90ms. Memory: 45.8MB. (by leetcode)
 * @param s Source string.
 * @returns Result number.
 */
export function myAtoi(s: string): number {
	const digits = new Map([
		["0",0],["1",1],["2",2],["3",3],["4",4],["5",5],["6",6],["7",7],["8",8],["9",9]
	]);
	let result = 0;
	let index = 0;
	let sign = 1;

	while (index < s.length && s[index] === ' ') index++ ;
	if (index < s.length && (s[index] === '+' || s[index] === '-')){
		if (s[index] === '-') sign = -1 ;
		index++;
	}
	while (s[index]) {
		const digit = s[index];
		let numberDigit: number | undefined;

		if(!digits.has(digit)) break ;
		numberDigit = digits.get(digit);
		if (numberDigit !== undefined) result = (result * 10) + numberDigit;
		if (result >= 2147483647 && sign === 1) return 2147483647;
		if (result >= 2147483648 && sign === -1) return -2147483648;
		index++ ;
	}
	return result * sign;
};
