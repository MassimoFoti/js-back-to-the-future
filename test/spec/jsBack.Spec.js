describe("jsBack", function(){

	"use strict";

	it("Is the root namespace for the app", function(){
		expect(jsBack).toBeDefined();
	});

	describe("Requires the following third party libraries:", function(){

		it("jQuery", function(){
			expect(jQuery).toBeDefined();
		});

		it("Handlebars", function(){
			expect(Handlebars).toBeDefined();
		});

		it("Luga JS", function(){
			expect(luga).toBeDefined();
		});

		it("Luga Data", function(){
			expect(luga.data).toBeDefined();
		});

		it("Luga Router", function(){
			expect(luga.router).toBeDefined();
		});

	});

});