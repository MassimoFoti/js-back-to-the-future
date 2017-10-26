(function(){
	"use strict";

	luga.namespace("jsBack");

	if(self.location.protocol === "file:"){
		alert("The demo is not going to work properly if accessed from a file system. You should use an HTTP server instead");
	}

	jQuery(document).ready(function(){
		var sectionSwitcher = new jsBack.SectionSwitcher();
		new jsBack.Controller({
			pageSwitcher: sectionSwitcher
		});
	});

}());