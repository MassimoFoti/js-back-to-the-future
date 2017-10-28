describe("jsBack.Controller", function(){

	"use strict";

	var mockSwitcher;
	beforeEach(function(){

		mockSwitcher = {
			displaySection: function(){
			},
			displayDefault: function(){
			}
		};
		spyOn(mockSwitcher, "displaySection");
		spyOn(mockSwitcher, "displayDefault");

	});

	afterEach(function(){
		location.hash = "";
	});

	it("Is a minimalist controller", function(){
		expect(jsBack.Controller).toBeDefined();
	});

	it("Invokes sectionSwitcher.displayDefault() if location.hash is empty", function(){
		new jsBack.Controller({
			sectionSwitcher: mockSwitcher
		});
		expect(mockSwitcher.displayDefault).toHaveBeenCalled();
	});

	it("Invokes sectionSwitcher.displaySection() if location.hash contains value", function(){
		location.hash = "first";
		new jsBack.Controller({
			sectionSwitcher: mockSwitcher
		});
		expect(mockSwitcher.displayDefault).not.toHaveBeenCalled();
		expect(mockSwitcher.displaySection).toHaveBeenCalledWith("first");
	});

	describe("Use a luga router", function(){

		var spiedRouter;
		beforeEach(function(){

			spiedRouter = new luga.router.Router();
			spyOn(spiedRouter, "start").and.callThrough();
			spyOn(spiedRouter, "resolve").and.callThrough();

			new jsBack.Controller({
				sectionSwitcher: mockSwitcher,
				router: spiedRouter
			});

		});

		it("Contains 2 routes", function(){
			expect(spiedRouter.getAll().length).toEqual(2);
		});

		describe("On start invokes:", function(){

			it("router.start()", function(){
				expect(spiedRouter.start).toHaveBeenCalled();
			});

			it("router.resolve()", function(){
				expect(spiedRouter.resolve).toHaveBeenCalled();
			});

		});

	});

});