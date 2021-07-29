:twisted_rightwards_arrows: [@array-like/swap](https://array-like.github.io/swap)
==

ArrayLike value swapping for JavaScript.
See [docs](https://array-like.github.io/swap/index.html).

```js
import {swapRanges} from '@array-like/swap';
import {alloc} from '@array-like/alloc';
import {iota} from '@array-like/iota';

const n = 6;
const a = alloc(n);
iota(a, 0, n, 0);
const b = alloc(n);
iota(b, 0, n, 0);

swapRanges(a, 0, 3, b, 3);
a; // 3 4 5 3 4 5
b; // 0 1 2 0 1 2
```

[![License](https://img.shields.io/github/license/array-like/swap.svg)](https://raw.githubusercontent.com/array-like/swap/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@array-like/swap.svg)](https://www.npmjs.org/package/@array-like/swap)
[![Tests](https://img.shields.io/github/workflow/status/array-like/swap/ci:test?event=push&label=tests)](https://github.com/array-like/swap/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/array-like/swap.svg)](https://david-dm.org/array-like/swap)
[![Dev dependencies](https://img.shields.io/david/dev/array-like/swap.svg)](https://david-dm.org/array-like/swap?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/array-like/swap.svg)](https://github.com/array-like/swap/issues)
[![Downloads](https://img.shields.io/npm/dm/@array-like/swap.svg)](https://www.npmjs.org/package/@array-like/swap)

[![Code issues](https://img.shields.io/codeclimate/issues/array-like/swap.svg)](https://codeclimate.com/github/array-like/swap/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/array-like/swap.svg)](https://codeclimate.com/github/array-like/swap/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/array-like/swap/main.svg)](https://codecov.io/gh/array-like/swap)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/array-like/swap.svg)](https://codeclimate.com/github/array-like/swap/trends/technical_debt)
[![Documentation](https://array-like.github.io/swap/badge.svg)](https://array-like.github.io/swap/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@array-like/swap)](https://bundlephobia.com/result?p=@array-like/swap)
