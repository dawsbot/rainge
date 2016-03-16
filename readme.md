# rainger
[![npm version](https://img.shields.io/npm/v/rainger.svg)](https://www.npmjs.com/package/rainger)
[![npm download count](http://img.shields.io/npm/dm/rainger.svg?style=flat)](http://npmjs.org/rainger)
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
          <a href="https://travis-ci.org/dawsonbotsford/rainger"><img src="https://api.travis-ci.org/dawsonbotsford/rainger.svg?branch=master"></a>
        </td>
        <td align="center">
          <a href="https://ci.appveyor.com/project/dawsonbotsford/rainger"><img src="http://www.gravatar.com/avatar/5f66f56cae930eb9ab2cd9e62b8285e6"></a>
        </td>
      </tr>
    </tbody>
  </table>

> Generate accurate date ranges for copyrights

<br>

## Install

```
npm install --save rainger
```

<br>

## Usage

*Assuming the current year from* `Date` *function is 2016*:
```js
const rainger = require('rainger');

rainger(2016);
//=> '2016'

rainger(1999);
//=> '1999 - 2016'
```

<br>

## About

I was tired of seeing websites in 2016 that said
> © 2015

or even worse
>© 2012 - 2014

Using `rainger`, you can set your copyright year once and have it change dynamically year-to-year. If you made your code in 2016, `rainger(2016)` will return `2016` until it is 2017, at which point `rainger(2016)` will return `2016 - 2017`

<br>

## API

### rainger(startYear)

##### startYear

Type: `string` || `number`

#### returns

Type: `string`

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)

<br>

---
If you like this, star it. If you want to follow me, follow me.
