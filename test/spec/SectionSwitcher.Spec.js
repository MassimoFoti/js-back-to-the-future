describe("jsBack.SectionSwitcher", function(){

	"use strict";

	beforeEach(function(){
		loadFixtures("sections.htm");
	});

	it("Is a simple widget to turn on/off sections inside the current page", function(){
		expect(jsBack.SectionSwitcher).toBeDefined();
	});

	it("As soon as it is created it hides all the sections apart from the default", function(){
		expect(jQuery("#first")).toBeVisible();
		expect(jQuery("#second")).toBeVisible();
		expect(jQuery("#third")).toBeVisible();

		new jsBack.SectionSwitcher({
			sectionSelector: "section",
			defaultSectionId: "first"
		});

		expect(jQuery("#first")).toBeVisible();
		expect(jQuery("#second")).not.toBeVisible();
		expect(jQuery("#third")).not.toBeVisible();
	});

	describe("It contains the following public methods", function(){

		var widget;
		beforeEach(function(){
			widget = new jsBack.SectionSwitcher({
				sectionSelector: "section",
				defaultSectionId: "first"
			});
		});

		describe(".displayDefault()", function(){

			it("Hide all the sections and show the default one", function(){
				// Hide all to reset
				jQuery("section").hide();
				widget.displayDefault();
				expect(jQuery("#first")).toBeVisible();
			});

		});

		describe(".displaySection()", function(){

			it("Hide all the sections and show the one matching the given id", function(){
				expect(jQuery("#first")).toBeVisible();
				widget.displaySection("third");
				expect(jQuery("#first")).not.toBeVisible();
				expect(jQuery("#third")).toBeVisible();
			});

			it("Fail silently if the given id does not matches any monitored section", function(){
				expect(jQuery("#first")).toBeVisible();
				widget.displaySection("missing");
				expect(jQuery("#first")).toBeVisible();
			});

		});

	});

});