(function(){
	"use strict";

	luga.namespace("jsBack");

	/* istanbul ignore if */
	if(self.location.protocol === "file:"){
		alert("The demo is not going to work properly if accessed from a file system. You should use an HTTP server instead");
	}

	var rssDataSet = new luga.data.Rss2Dataset({
		uuid: "feedDs",
		url: "feed/heshootshescoores.com.xml",
		formatter: jsBack.utils.feedDateFormatter
	});

	var libsDataSet = new luga.data.JsonDataSet({
		uuid: "libsDs",
		url: "data/libraries.json"
	});

	jQuery(document).ready(function(){

		rssDataSet.loadData();
		libsDataSet.loadData();

		var switcher = new jsBack.SectionSwitcher({
			sectionSelector: "#content section",
			defaultSectionId: "home"
		});
		var router = new luga.router.Router();

		new jsBack.Controller({
			sectionSwitcher: switcher,
			router: router
		});

	});

}());