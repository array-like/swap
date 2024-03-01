import test from 'ava';

import {_calloc} from '@array-like/alloc';
import {randint} from '@randomized/random';

import {arrayTypes} from './_fixtures.js';
import {swapRanges} from '#module';

const macro = (t, Constructor) => {
	const calloc = _calloc(Constructor);

	const n = 100;
	const ai = 23;
	const aj = 73;
	const bi = 49;

	const a = calloc(n);
	const b = calloc(n);
	const c = calloc(n);
	const d = calloc(n);

	for (let i = 0; i < n; ++i) {
		a[i] = randint(1, 2 ** 31);
		b[i] = randint(1, 2 ** 31);
		c[i] = a[i];
		d[i] = b[i];
	}

	swapRanges(a, ai, aj, b, bi);

	for (let i = 0; i < n; ++i) {
		if (i < ai || i >= aj) {
			t.deepEqual(a[i], c[i], `a[${i}] === c[${i}]`);
		} else {
			const j = i - ai + bi;
			t.deepEqual(a[i], d[j], `a[${i}] === d[${j}]`);
		}

		if (i < bi || i >= bi + aj - ai) {
			t.deepEqual(b[i], d[i], `b[${i}] === d[${i}]`);
		} else {
			const j = i - bi + ai;
			t.deepEqual(b[i], c[j], `b[${i}] === c[${j}]`);
		}
	}

	swapRanges(a, ai, aj, b, bi);

	t.deepEqual(a, c, 'swapranges back check a');
	t.deepEqual(b, d, 'swapranges back check b');

	swapRanges(a, ai, aj, a, ai);

	t.deepEqual(a, c, 'swapranges self check a');
};

macro.title = (title, Constructor) => title ?? Constructor.name;

for (const arrayType of arrayTypes) test(macro, arrayType);
