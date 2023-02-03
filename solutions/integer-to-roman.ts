const symbolsMap = new Map<number, {1: string, 5: string, 10: string}>([
	[10, {1: 'I', 5: 'V', 10: 'X'}],
	[100, {1: 'X', 5: 'L', 10: 'C'}],
	[1000, {1: 'C', 5: 'D', 10: 'M'}],
]);

/**
 * Converts an intenger to a roman numeral
 *
 * Runtime: 124ms. Memory: 47.5MB. (by leetcode)
 * @param num Source integer
 */
export function intToRoman(num: number, base = 10): string {
	if (num <= 0) return '';
	if (base === 10000) return 'M'.repeat(num / 1000);

	const symbolsSet = symbolsMap.get(base);
	if (!symbolsSet) throw new Error(`There is not enough data in symbolsMap. There is no symbols set for base ${base}`);

	const remainder = num % base;
	const result = remainder / base * 10;
	let resultString = ''

	if (result < 4)
		resultString = symbolsSet[1].repeat(result)
	else if (result < 5)
		resultString = symbolsSet[1] + symbolsSet[5]
	else if (result < 9)
		resultString = symbolsSet[5] + symbolsSet[1].repeat(result - 5)
	else
		resultString = symbolsSet[1] + symbolsSet[10]

	if (num < base) return resultString;
	else return intToRoman(num, base * 10) + resultString;
}
/**
 * Converts an intenger to a roman numeral
 *
 * Runtime: 121ms. Memory: 47.4MB. (by leetcode)
 * @param num Source integer
 */
export function intToRomanLinear(num: number): string {
	let currentNumber: number;
	let updatedNumber: number;
	let roundedResult: number;
	let resultString: string;

	currentNumber = num;
	resultString = '';
	if (currentNumber >= 1000){
		updatedNumber = currentNumber % 1000;
		roundedResult = currentNumber - updatedNumber;
		resultString += 'M'.repeat((roundedResult) / 1000);
		currentNumber = updatedNumber;
	}
	if(currentNumber >= 500){
		updatedNumber = currentNumber % 100;
		roundedResult = currentNumber - updatedNumber;
		if (roundedResult === 900) resultString += "CM"
		else resultString += "D" + "C".repeat(roundedResult / 100 - 5)
		currentNumber = updatedNumber;
	}else if(currentNumber >= 100){
		updatedNumber = currentNumber % 100;
		roundedResult = currentNumber - updatedNumber;
		if (roundedResult === 400) resultString += "CD"
		else resultString += "C".repeat(roundedResult / 100)
		currentNumber = updatedNumber;
	}
	if(currentNumber >= 50){
		updatedNumber = currentNumber % 10;
		roundedResult = currentNumber - updatedNumber;
		if (roundedResult === 90) resultString += "XC"
		else resultString += "L" + "X".repeat(roundedResult / 10 - 5)
		currentNumber = updatedNumber;
	}else if(currentNumber >= 10){
		updatedNumber = currentNumber % 10;
		roundedResult = currentNumber - updatedNumber;
		if (roundedResult === 40) resultString += "XL"
		else resultString += "X".repeat(roundedResult / 10)
		currentNumber = updatedNumber;
	}
	if(currentNumber >= 5){
		if (currentNumber === 9) resultString += "IX"
		else resultString += "V" + "I".repeat(currentNumber - 5)
	}else if(currentNumber >= 0){
		if (currentNumber === 4) resultString += "IV"
		else resultString += "I".repeat(currentNumber)
	}
	return resultString;
};

console.log(intToRoman(1));
