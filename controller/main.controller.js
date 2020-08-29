sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, msgBox) {
	"use strict";

	return Controller.extend("joel.controller.main", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf joel.view.main
		 */
		//	onInit: function() {
		//
		//	},
		popUp: function(){
			debugger;
			msgBox.success("Successfully Done",{
				title : "Message"
			});
			
		},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf joel.view.main
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf joel.view.main
		 */
		map : null,
		code : null,
		marker : null,
			enterLoc : function(oEvent){
				debugger;
				var that = this;
				var location = oEvent.getParameters().query;
				if (this.code === null){
					this.code = new google.maps.Geocoder();
				}
				if (this.marker === null){
					this.marker = new google.maps.Marker(); 
				}
				this.code.geocode({address : location}, function(result, status){
					if (status === "OK"){
						debugger;
						that.map.setCenter(result[0].geometry.location);
						that.marker.setMap(that.map);
						that.marker.setPosition(result[0].geometry.location);
					}
					else{
						msgBox.error("GeoCode is not Successful due to " + status,{
							title : "Error"
						});
					}
				});
			},
			onAfterRendering: function() {
			this.map = new google.maps.Map(document.getElementById("idMap"),{
				zoom : 6,
				center : {lat:12.2, lng:78.5}
				
			});
			
			}

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf joel.view.main
		 */
		//	onExit: function() {
		//
		//	}

	});

});