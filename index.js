#!/usr/bin/env node

const fs = require('fs');

fs.readdir(process.cwd(), (error, filenames) => {
	if (error) {
		console.log(error);
	}

	console.log(filenames);
});
