/**
 * @typedef {Object} jsBack.SectionSwitcher.options
 *
 * @property {String} ["section"]             sectionSelector   jQuery selector to collect all the sections.
 *                                                              Default to "section"
 * @property {defaultSectionId} [undefined"]  defaultSectionId  Id as a string.
 *                                                              Should match the id attribute of the default section
 */

(function(){
	"use strict";

	luga.namespace("jsBack");

	/**
	 * A simple widget to turn on/off sections inside the current page
	 * @param {jsBack.SectionSwitcher.options} options
	 * @constructor
	 */
	jsBack.SectionSwitcher = function(options){

		/**
		 * @type {jsBack.SectionSwitcher.options}
		 */
		var config = {
			sectionSelector: "section",
			defaultSectionId: undefined
		};
		luga.merge(config, options);

		var self = this;

		var sectionsMap = {};

		var init = function(){
			populateMap();
			hideAll();
			self.displayDefault();
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

		/**
		 * Display the default section
		 */
		this.displayDefault = function(){
			self.displaySection(config.defaultSectionId);
		};

		/**
		 * Turn-off all the section and display the one with id matching the given parameter
		 * If the given id does not matches any of the current sections, it fails silently
		 * @param {String} sectionId
		 */
		this.displaySection = function(sectionId){
			var targetSection = sectionsMap[sectionId];
			// Fail silently if we don't recognize the given id
			if(targetSection !== undefined) {
				hideAll();
				targetSection.show();
			}
		};

		init();

	};

}());