sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	'sap/ui/model/json/JSONModel'
], function (Controller,UIComponent,JSONModel) {
	"use strict";

	return Controller.extend("Task.Task.controller.View1", {
		formatter:formatter,
		onInit: function () {
			this.oPeople = new JSONModel({
			});
			this.getView().setModel(this.oPeople, "people");
			this.loadPeople();
		},

		loadPeople: function () {
			$.ajax({
				type: "GET",
				url:"https://services.odata.org/V4/TripPinServiceRW/People",
				dataType: "json",
				success: aPeople => {
					this.getView().getModel("people").setData(aPeople);
				}
			});
		}
	});
});