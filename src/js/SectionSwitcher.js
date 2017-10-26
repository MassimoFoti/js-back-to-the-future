(function(){
	"use strict";

	luga.namespace("jsBack");

	jsBack.SectionSwitcher = function(options){

		var config = {
			sectionSelector: "section"
		};
		luga.merge(config, options);

		var init = function(){

		};

		this.displaySection = function(sectionId) {
			console.debug("displaySection: " + sectionId)
		};

		this.displayDefault = function() {
			console.debug("displayDefault")
		};

		init();

	};

}());