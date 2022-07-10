const fs = require('fs');

fs.readdir('.', (error, filenames) => {
	if (error) {
		console.log(error);
	}

	console.log(filenames);
});
