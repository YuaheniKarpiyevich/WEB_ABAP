/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Task/Task/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});