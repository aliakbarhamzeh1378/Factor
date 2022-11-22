const glob = require('glob');

module.exports = (app) => {
	glob(`${__dirname}/routes/**/*Routes.js`, {}, (er, files) => {
		console.log(files)
		if (er) throw er;
		files.forEach(file => {
			// console.log(file)

			require(file)(app)
		});
	});
};
