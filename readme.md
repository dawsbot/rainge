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

> Use date ranges that never need updating

<br>

## Install

```
npm install --save rainge
```

<br>

## Usage

#### Node

```js
const rainge = require('rainge');

// assuming the current year is 2016:
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

Using `rainge`, you set your copyright year once and it will **automatically change year-to-year**. `rainge(2016)` would return `"2016"` until 2017, at which point `rainge(2016)` would return `"2016 - 2017"`

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
