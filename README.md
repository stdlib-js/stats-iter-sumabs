<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# itersumabs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the sum of absolute values for all [iterated][mdn-iterator-protocol] values.

<section class="intro">

The sum of absolute values is defined as

<!-- <equation class="equation" label="eq:sum_absolute_values" align="center" raw="s = \sum_{i=0}^{n-1} |x_i|" alt="Equation for the sum of absolute values."> -->

```math
s = \sum_{i=0}^{n-1} |x_i|
```

<!-- <div class="equation" align="center" data-raw-text="s = \sum_{i=0}^{n-1} |x_i|" data-equation="eq:sum_absolute_values">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@e7ac225deb396ee6d2b4d5fc1a2faa645582349f/lib/node_modules/@stdlib/stats/iter/sumabs/docs/img/equation_sum_absolute_values.svg" alt="Equation for the sum of absolute values.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
itersumabs = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-sumabs@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-iter-sumabs/tags). For example,

```javascript
itersumabs = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-sumabs@v0.2.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var itersumabs = require( 'path/to/vendor/umd/stats-iter-sumabs/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-sumabs@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.itersumabs;
})();
</script>
```

#### itersumabs( iterator )

Computes the sum of absolute values for all [iterated][mdn-iterator-protocol] values.

```javascript
var array2iterator = require( '@stdlib/array-to-iterator' );

var arr = array2iterator( [ 1.0, 2.0, -3.5, 4.0 ] );

var s = itersumabs( arr );
// returns 10.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the returned [`iterator`][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   For iterators which can generate many values or which may output large numbers, care should be taken to prevent overflow.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-iter-sumabs@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Create an iterator for generating uniformly distributed pseudorandom numbers:
var rand = runif( -10.0, 10.0, {
    'seed': 1234,
    'iter': 100
});

// Compute the sum of absolute values:
var s = itersumabs( rand );
// returns <number>

console.log( 'sumabs: %d.', s );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-iter/meanabs`][@stdlib/stats/iter/meanabs]</span><span class="delimiter">: </span><span class="description">compute the arithmetic mean of absolute values for all iterated values.</span>
-   <span class="package-name">[`@stdlib/stats-iter/msumabs`][@stdlib/stats/iter/msumabs]</span><span class="delimiter">: </span><span class="description">create an iterator which iteratively computes a moving sum of absolute values.</span>
-   <span class="package-name">[`@stdlib/stats-iter/sum`][@stdlib/stats/iter/sum]</span><span class="delimiter">: </span><span class="description">compute the sum of all iterated values.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-iter-sumabs.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-iter-sumabs

[test-image]: https://github.com/stdlib-js/stats-iter-sumabs/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/stats-iter-sumabs/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-iter-sumabs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-iter-sumabs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-iter-sumabs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-iter-sumabs/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-iter-sumabs/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-iter-sumabs/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-iter-sumabs/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-iter-sumabs/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-iter-sumabs/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-iter-sumabs/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-iter-sumabs/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-iter-sumabs/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/stats/iter/meanabs]: https://github.com/stdlib-js/stats-iter-meanabs/tree/umd

[@stdlib/stats/iter/msumabs]: https://github.com/stdlib-js/stats-iter-msumabs/tree/umd

[@stdlib/stats/iter/sum]: https://github.com/stdlib-js/stats-iter-sum/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
