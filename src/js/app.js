(function(){
	"use strict";

	luga.namespace("jsBack");

	/* istanbul ignore if */
	if(self.location.protocol === "file:"){
		alert("The demo is not going to work properly if accessed from a file system. You should use an HTTP server instead");
	}

	var feedDateFormatter = function(row, rowIndex, dataSet){
		var dateObj = new Date(row.pubDate);
		// Turn date into a reasonable string rapresentation
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString
		var dateStr = dateObj.toUTCString();
		var trimmedStr = dateStr.substring(0, dateStr.length - 12);
		row.pubDate = trimmedStr;
		return row;
	};

	var rssDataSet = new luga.data.Rss2Dataset({
		uuid: "feedDs",
		url: "feed/heshootshescoores.com.xml",
		formatter: feedDateFormatter
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