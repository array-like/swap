/**
 * SwapRanges.
 *
 * @param {{[x: number]: any}} a
 * @param {number} ai
 * @param {number} aj
 * @param {{[x: number]: any}} b
 * @param {number} bi
 */
const swapRanges = (a, ai, aj, b, bi) => {
	for (; ai < aj; ++ai, ++bi) {
		const temporary = a[ai];
		a[ai] = b[bi];
		b[bi] = temporary;
	}
};

export default swapRanges;
