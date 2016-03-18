# rainge
[![npm version](https://img.shields.io/npm/v/rainge.svg)](https://www.npmjs.com/package/rainge)
[![npm download count](http://img.shields.io/npm/dm/rainge.svg?style=flat)](http://npmjs.org/rainge)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

  <table>
    <thead>
      <tr>
        <th>Linux & OSX</th>
        <th>Windows</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td align="center">
          <a href="https://travis-ci.org/dawsonbotsford/rainge"><img src="https://api.travis-ci.org/dawsonbotsford/rainge.svg?branch=master"></a>
        </td>
        <td align="center">
          <a href="https://ci.appveyor.com/project/dawsonbotsford/rainge"><img src="https://ci.appveyor.com/api/projects/status/1qjrnuj1tni0osli?svg=true"></a>
        </td>
      </tr>
    </tbody>
  </table>

> A one-liner to generate accurate date ranges for copyrights

<br>

## Install

```
npm install --save rainge
```

<br>

## Usage

*Assuming the current year from* `Date` *function is 2016*:

#### Node

```js
const rainge = require('rainge');

rainge(2016);
//=> '2016'

rainge(1999);
//=> '1999 - 2016'
```

<br>

#### Web
```html
<script src="https://rawgit.com/dawsonbotsford/rainge/master/bundle.js"></script>
<script>
  alert('\u00A9 ' + rainge(1999));
  //=> © 1999 - 2016
</script>
```

<br>

Or download it with `npm install --save rainge` and reference it as:
```html
<script src="node_modules/rainge/bundle.js"></script>
```

<br>

## About

I was tired of seeing websites in 2016 that said
> © 2015

or even worse
>© 2012 - 2014

Using `rainge`, you can set your copyright year once and have it change dynamically year-to-year. If you made your code in 2016, `rainge(2016)` will return `2016` until it is 2017, at which point `rainge(2016)` will return `2016 - 2017`

<br>

## API

### rainge(startYear)

##### startYear

Type: `string` || `number`

#### returns

Type: `string`

<br>

## Related
* [updateyourfooter.com](http://updateyourfooter.com/)

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)

<br>

---
If you like this, star it. If you want to follow me, follow me.
