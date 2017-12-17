# case-dot [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> Parse and stringify strings delimited by a dot

## Installation

```sh
$ npm install --save case-dot
```

## Usage

```js
const caseDot = require("case-dot");

// Parse
caseDot.parse("this.is.an.example"); // ['this', 'is', 'an', 'example']

// Stringify
caseDot.stringify(["this", "is", "an", "example"]); // 'this.is.an.example'

// Check
caseDot.is("this.is.an.example"); // True
caseDot.is("this_is_an_example"); // False
caseDot.is("thisIsAnExample"); // False
caseDot.is("this"); // False
```

## License

MIT © [Malte-Maurice Dreyer](https://github.com/Myhlamaeus)

[npm-image]: https://badge.fury.io/js/case-dot.svg
[npm-url]: https://npmjs.org/package/case-dot
[travis-image]: https://travis-ci.org/Myhlamaeus/case-dot.svg?branch=master
[travis-url]: https://travis-ci.org/Myhlamaeus/case-dot
[daviddm-image]: https://david-dm.org/Myhlamaeus/case-dot.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Myhlamaeus/case-dot
[coveralls-image]: https://coveralls.io/repos/Myhlamaeus/case-dot/badge.svg
[coveralls-url]: https://coveralls.io/r/Myhlamaeus/case-dot
