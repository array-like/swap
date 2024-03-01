import test from 'ava';

import {_calloc} from '@array-like/alloc';
import {randint} from '@randomized/random';

import {arrayTypes} from './_fixtures.js';

import {swap} from '#module';

const macro = (t, Constructor) => {
	const calloc = _calloc(Constructor);

	const n = 100;
	const ai = 23;
	const aj = 73;

	const a = calloc(n);
	const b = calloc(n);

	for (let i = 0; i < n; ++i) {
		a[i] = randint(1, 2 ** 31);
		b[i] = a[i];
	}

	swap(a, ai, aj);

	for (let i = 0; i < n; ++i) {
		if (i === ai || i === aj) {
			const j = ai + aj - i;
			t.deepEqual(a[i], b[j], `a[${i}] === b[${j}]`);
		} else {
			t.deepEqual(a[i], b[i], `a[${i}] === b[${i}]`);
		}
	}

	swap(a, ai, aj);

	t.deepEqual(a, b, 'swap back');

	swap(a, ai, ai);

	t.deepEqual(a, b, 'swap');
};

macro.title = (title, Constructor) => title ?? Constructor.name;

for (const arrayType of arrayTypes) test(macro, arrayType);
