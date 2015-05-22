'use strict';
var execFile = require('child_process').execFile;

module.exports = function (cb) {
	var cmd = 'iwgetid';
	var args = ['--raw'];
	var ret;

	if (process.platform !== 'linux') {
		throw new Error('Only Linux systems are supported');
	}

	execFile(cmd, args, function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		ret = stdout.replace('\n', '');

		if (!ret) {
			cb(new Error('Could not get SSID'));
			return;
		}

		cb(null, ret);
	});
};
