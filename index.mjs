// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-sumabs@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function r(r){var i,o;if(!t(r))throw new TypeError(e("1LT3w",r));for(i=s();!(o=r.next()).done;)"number"==typeof o.value?i(o.value):i(NaN);return i()}export{r as default};
//# sourceMappingURL=index.mjs.map