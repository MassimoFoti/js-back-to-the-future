/* global module */

/*
 Use Karma only for the sake of producing a code coverage report.
 No need to use multiple browsers
 */
module.exports = function(config){
	"use strict";
	config.set({
		basePath: "../",
		browsers: ["Chrome"],
		frameworks: ["jasmine"],
		files: [
			// Libs
			"lib/jquery/jquery.min.js",
			"lib/handlebars.min.js",
			"lib/luga/luga.common.min.js",
			"lib/luga/luga.data.min.js",
			"lib/luga/luga.router.min.js",

			// Jasmine libs
			"test/lib/jasmine/jasmineFixtures.min.js",
			"test/lib/jasmine/jasmineMatchers.min.js",
			"test/lib/jasmine/mock-ajax.js",

			// Config
			"test/fixtures.karma.config.js",

			// Source files
			// Some of these must be loaded in aspecific order
			"src/js/utils.js",
			"src/**/*.js",

			// Test specs
			"test/spec/*.Spec.js",
			"test/spec/**/*.Spec.js",

			// Fixtures
			{pattern: "test/fixtures/**/*.json", watched: true, served: true, included: false},
			{pattern: "test/fixtures/**/*.htm", watched: true, served: true, included: false},
			{pattern: "test/fixtures/**/*.txt", watched: true, served: true, included: false},
			{pattern: "test/fixtures/**/*.xml", watched: true, served: true, included: false}
		],
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		preprocessors: {
			"src/**/*.js": ["coverage"]
		},

		coverageReporter: {
			reporters: [
				{type: "lcov", dir: "test/coverage/", subdir: "."},
				{type: "text", dir: "test/coverage/", subdir: ".", file: "coverage.txt"},
				{type: "text-summary"}
			]
		},

		reporters: ["progress", "html", "coverage"],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true
	});
};