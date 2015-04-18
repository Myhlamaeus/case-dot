case-dot [![Code Climate](https://codeclimate.com/github/ileri/case-dot/badges/gpa.svg)](https://codeclimate.com/github/ileri/case-dot) [![Build Status](https://travis-ci.org/ileri/case-dot.svg)](https://travis-ci.org/ileri/case-dot) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard
==============
> Parse and stringify strings delimited by a dot

Install
--------------
```
$ npm install --save case-dot
```

Usage
--------------
```js
var caseDot = require('case-dot')

// parse
caseDot.parse('this.is.an.example') // ['this', 'is', 'an', 'example']

// stringify
caseDot.stringify(['this', 'is', 'an', 'example']) // 'this.is.an.example'

// check
caseDot.is('this.is.an.example') // true
caseDot.is('this_is_an_example') // false
caseDot.is('thisIsAnExample') // false
caseDot.is('this') // false
```
