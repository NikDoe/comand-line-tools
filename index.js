#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
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

	const statsPromises = filenames.map(filename => lstat(filename));
	const allStats = await Promise.all(statsPromises);

	allStats.forEach((stats, index) => {
		if (stats.isFile()) console.log(filenames[index]);
		else console.log(chalk.hex('#660099').italic(filenames[index]));
	});
});
