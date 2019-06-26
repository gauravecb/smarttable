jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"com/table/smart/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"com/table/smart/test/integration/pages/Worklist",
		"com/table/smart/test/integration/pages/Object",
		"com/table/smart/test/integration/pages/NotFound",
		"com/table/smart/test/integration/pages/Browser",
		"com/table/smart/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.table.smart.view."
	});

	sap.ui.require([
		"com/table/smart/test/integration/WorklistJourney",
		"com/table/smart/test/integration/ObjectJourney",
		"com/table/smart/test/integration/NavigationJourney",
		"com/table/smart/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});
