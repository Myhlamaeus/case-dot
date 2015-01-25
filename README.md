case-dot
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
var caseDot = require("case-dot");

// parse
caseDot.parse("this.is.an.example"); // ["this", "is", "an", "example"]

// stringify
caseDot.stringify(["this", "is", "an", "example"]); // "this.is.an.example"

// check
caseDot.is("this.is.an.example"); // true
caseDot.is("this_is_an_example"); // false
caseDot.is("thisIsAnExample"); // false
caseDot.is("this"); // false
```
