# linux-wifi-name [![Build Status](https://travis-ci.org/kevva/linux-wifi-name.svg?branch=master)](https://travis-ci.org/kevva/linux-wifi-name)

> Get current wifi name on Linux


## Install

```
$ npm install --save linux-wifi-name
```


## Usage

```js
var linuxWifiName = require('wifi-name');

linuxWifiName(function (err, name) {
	console.log(name);
	//=> 'wu-tang lan'
});
```


## License

MIT © [Kevin Martensson](http://github.com/kevva)
