(function(){
	"use strict";

	luga.namespace("jsBack");

	jsBack.Controller = function(options){

		var config = {
			sectionSwitcher: undefined,
			router: new luga.router.Router
		};
		luga.merge(config, options);

		var init = function(){
			initRouter();
		};

		var initRouter = function(){
			config.router.add("{section}", resolveRoute);
			config.router.add(":catchall:", resolveCatchAllRoute);
			config.router.start();
			// Programmatically trigger the Router on page load
			config.router.resolve(config.router.normalizeHash(location.hash));
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