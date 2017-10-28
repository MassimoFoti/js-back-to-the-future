describe("jsBack.utils", function(){

	"use strict";

	it("Contains static utilities", function(){
		expect(jsBack.utils).toBeDefined();
	});

	describe(".feedDateFormatter()", function(){

		it("Is a formatter to be used for Luga datasets", function(){
			expect(jsBack.utils.feedDateFormatter).toBeDefined();
		});

		it("Convert a date string used in RSS 2.0 into a more readable equivalent", function(){
			var mockRow = {
				pubDate: "Wed, 25 Oct 2017 07:08:09 +0000"
			};
			jsBack.utils.feedDateFormatter(mockRow);
			expect(mockRow.pubDate).toEqual("Wed, 25 Oct 2017 ");
		});

	});

});