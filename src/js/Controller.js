/**
 * @typedef {Object} jsBack.Controller.options
 *
 * @property {jsBack.SectionSwitcher} sectionSwitcher
 */

(function(){
	"use strict";

	luga.namespace("jsBack");

	/**
	 * Minimalist controller for demo app
	 * @param {jsBack.Controller.options} options
	 * @constructor
	 */
	jsBack.Controller = function(options){

		/**
		 * @type {jsBack.Controller.options}
		 */
		var config = {
			sectionSwitcher: undefined
		};
		luga.merge(config, options);

		var router = new luga.router.Router();

		var init = function(){
			initRouter();
		};

		var initRouter = function(){
			router.add("{section}", resolveRoute);
			router.add(":catchall:", resolveCatchAllRoute);
			router.start();
			// Programmatically trigger the Router on page load
			router.resolve(router.normalizeHash(location.hash));
		};

		/**
		 * @param {luga.router.routeContext} context
		 */
		var resolveRoute = function(context){
			config.sectionSwitcher.displaySection(context.params.section);
		};

		var resolveCatchAllRoute = function(){
			config.sectionSwitcher.displayDefault();
		};

		init();
	};

}());