var gulp = require("gulp");
var karmaServer = require("karma").Server;

/* Tasks */

gulp.task("coverage", function (done) {
	// Use Karma only for the sake of producing a code coverage report
	new karmaServer({
		configFile: __dirname + "/karma.conf.js"
	}, done).start();
});