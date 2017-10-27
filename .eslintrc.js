/* eslint-env node */
module.exports = {
	root: true,

	// Based on the recommended rules
	extends: "eslint:recommended",

	// Default environments
	env: {
		es6: false,
		browser: true,
		jquery: true
	},

	// Globals
	globals: {
		// Libs
		"Handlebars": false,
		"luga": false,
		// App
		"jsBack": true
	},

	parserOptions: {
		ecmaFeatures: {
			// Enable let and const
			blockBindings: true
		}
	},

	rules: {
		"camelcase": ["error"],
		"eqeqeq": ["error"],

		"indent": [
			"error",
			"tab",
			{"SwitchCase": 1}
		],

		"new-cap": ["warn"],

		"no-array-constructor": ["error"],
		"no-bitwise": ["error"],
		"no-console": ["warn"],
		"no-caller": ["error"],
		"no-extend-native": ["error"],
		"no-implicit-globals": ["error"],
		"no-multi-assign": ["error"],
		"no-new-func": ["error"],
		"no-new-object": ["error"],
		"no-new-wrappers": ["error"],
		"no-param-reassign": ["warn"],
		"no-proto": ["error"],
		"no-return-assign": ["error", "always"],
		"no-sequences": ["error"],
		"no-shadow": ["warn"],
		"no-ternary": ["warn"],
		"no-undef": ["error"],
		"no-underscore-dangle": ["error"],
		"no-unused-vars": ["error", {"vars": "all", "args": "none", "ignoreRestSiblings": false}],
		"no-void": ["error"],
		"no-with": ["error"],

		"quotes": [
			"error",
			"double"
		],

		"semi": ["error"],

		// Strict at function level (at least)
		"strict": [
			"error",
			"function"
		],

		// New features, we se "const" always if not possible use "let"
		"prefer-const": ["warn"],

		// JSDoc
		"require-jsdoc": ["warn"],
		"valid-jsdoc": [
			"warn",
			{
				prefer: {
					// Use the right string instead of the left one
					"returns": "return",
					"arg": "param",
					"argument": "param",
					"class": "constructor",
					"virtual": "abstract"
				},
				preferType: {
					// Use the right string instead of the left one
					'object': 'Object',
					'Number': 'Number',
					'String': 'String',
					'Boolean': 'Boolean'
				},

				// If and only if the function or method has a return statement (this option value does apply to constructors)
				requireReturn: false,
				requireReturnType: true,
				requireParamDescription: false,
				requireReturnDescription: false
			}
		]
	}
};