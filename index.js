#!/usr/bin/env node

const fs = require('fs');
// const util = require('util');

// Method #1
const lstat = filename => {
	return new Promise((res, rej) => {
		fs.lstat(filename, (err, stats) => {
			if (err) rej(err);
			res(stats);
		});
	});
};

// Method #2
// const lstat = util.promisify(fs.lstat);

// Method #3
// const { lstat } = fs.promises;

fs.readdir(process.cwd(), async (error, filenames) => {
	if (error) {
		console.log(error);
	}

	for (const filename of filenames) {
		try {
			const stats = await lstat(filename);
			console.log(filename, stats.isFile());
		} catch (err) {
			console.log(err);
		}
	}
});
