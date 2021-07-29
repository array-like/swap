/**
 * Swap.
 *
 * @param {{[x: number]: any}} a
 * @param {number} i
 * @param {number} j
 */
const swap = (a, i, j) => {
	const ai = a[i];
	a[i] = a[j];
	a[j] = ai;
};

export default swap;
