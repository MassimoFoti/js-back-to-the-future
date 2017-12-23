(function(){
	"use strict";

	luga.namespace("jsBack");

	/* istanbul ignore if */
	if(self.location.protocol === "file:"){
		alert("The demo is not going to work properly if accessed from a file system. You should use an HTTP server instead");
	}

	var libsDataSet = new luga.data.JsonDataSet({
		uuid: "libsDs",
		url: "data/libraries.json"
	});

	jQuery(document).ready(function(){
		
		libsDataSet.loadData();

		var switcher = new jsBack.SectionSwitcher({
			sectionSelector: "#content section",
			defaultSectionId: "home"
		});

		new jsBack.Controller({
			sectionSwitcher: switcher
		});

	});

}());