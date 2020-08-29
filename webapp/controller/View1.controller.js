sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, message) {
	"use strict";

	return Controller.extend("demo.demoUI5.controller.View1", {
		
		onInit: function(){
			
			this.oRouter= this.getOwnerComponent().getRouter();
			// debugger;
			// let oData = sap.ui.model.odata.v2.ODataModel("https://hdb1p1940088940trial.hanatrial.ondemand.com/JF/odata/salesOrder.xsodata/");
			// this.getView().setModel(oData);
			
			this.oData =  new sap.ui.model.odata.v2.ODataModel("/hanaxs/JF/odata/test.xsodata");
			// oData.oHeaders={
			// 	DataServiceVersion : "3.0",
			// 	MaxDataServiceVersion : "3.0"
			// }
			this.getView().setModel(this.oData);
			//console.log(oData);
			
		},
		
		onPress: function(event){
			
			this.oRouter.navTo("view2");
		},
		
		onCreate: function(){
			
		},
		
		onEdit : function(){
			
		},
		
		onDelete: function(){
			
		},
		
		onSave : function(){
			debugger;
			var payload = {
				"ID" : this.getView().byId("idID").getValue(),
				"Name":this.getView().byId("idName").getValue(),
				"Description" :this.getView().byId("idDesc").getValue(),
				"Rating" :this.getView().byId("idRate").getValue(),
				"Price": this.getView().byId("idPrice").getValue()
			};
			
			this.oData.create("/ProdSet", payload, {
				success: function(){
					message.success("Product Created Successfully",{ title : "Success"});
				},
				error : function(){
					message.error("Product creation Failed!", {title: "Error"});
				}
			});
			this.getView().byId("idForm").setVisible(false);
			this.refresh();
		},
		
		onDecline: function(){
			
		},
		
		refresh: function(){
			debugger;
			
			this.getView().byId("idID").setValue("");
			this.getView().byId("idName").setValue("");
			this.getView().byId("idDesc").setValue("");
			this.getView().byId("idRate").setValue("");
			this.getView().byId("idPrice").setValue("");
		}

	});
});