(function(){
	"use strict";

	luga.namespace("jsBack");

	jsBack.Controller = function(options){

		var config = {
			pageSwitcher: undefined
		};
		luga.merge(config, options);

		/**
		 * @type {luga.router.Router}
		 */
		var router = new luga.router.Router();

		var init = function(){
			initRouter();
		};

		var initRouter = function(){
			router.add("{section}/", resolveRoute);
			router.add(":catchall:", resolveCatchAllRoute);
			router.start();
			// Programmatically trigger the Router on page load
			router.resolve(router.normalizeHash(location.hash));
		};

		var resolveRoute = function(){

		};

		var resolveCatchAllRoute = function(){

		};

		init();
	};

}());




