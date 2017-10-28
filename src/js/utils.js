(function(){
	"use strict";

	luga.namespace("jsBack.utils");

	/**
	 * Date formatter for RSS dates
	 * To be used for RSS datasets
	 * @param {luga.data.DataSet.row} row
	 * @param {Number} rowIndex
	 * @param {luga.data.DataSet} dataSet
	 * @return {luga.data.DataSet.row}
	 */
	jsBack.utils.feedDateFormatter = function(row, rowIndex, dataSet){
		var dateObj = new Date(row.pubDate);
		// Turn date into a reasonable string rapresentation
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString
		var dateStr = dateObj.toUTCString();
		var trimmedStr = dateStr.substring(0, dateStr.length - 12);
		row.pubDate = trimmedStr;
		return row;
	};

}());