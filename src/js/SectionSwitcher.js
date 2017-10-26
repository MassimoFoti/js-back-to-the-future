(function(){
	"use strict";

	luga.namespace("jsBack");

	jsBack.SectionSwitcher = function(options){

		var config = {
			sectionSelector: "section",
			defaultSectionId: undefined
		};
		luga.merge(config, options);

		var self = this;

		var sectionsMap = {};

		var init = function(){
			populateMap();
		};

		var populateMap = function(){
			jQuery(config.sectionSelector).each(function(index){
				var jSection = $(this);
				sectionsMap[jSection.attr("id")] =  jSection;
			});
		};

		var hideAll = function(){
			jQuery(config.sectionSelector).hide();
		};

		this.displaySection = function(sectionId){
			var targetSection = sectionsMap[sectionId];
			// Fail silently if we don't recognize the given id
			if(targetSection !== undefined) {
				hideAll();
				targetSection.show();
			}
		};

		this.displayDefault = function(){
			self.displaySection(config.defaultSectionId);
		};

		init();

	};

}());