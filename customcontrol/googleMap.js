sap.ui.define([
	"sap/ui/core/Control"
	], 
	function(superControl){
		
	return superControl.extend("joel.customcontrol.googleMap",{
		
		metadata:{
			properties:{
			height : "",
			width :"",
			border: ""
			}
		},
		init: function(){
			this.setHeight("70%");
			this.setWidth("90%");
			this.setBorder("2px solid black");
		},
		renderer : function(oRm,oControl){
			
			oRm.write("<div id='idMap'");
			oRm.addStyle("height", oControl.getHeight());
			oRm.addStyle("width", oControl.getWidth());
			oRm.addStyle("border", oControl.getBorder());
			oRm.writeStyles();
			oRm.write(">");
		}
		
	});
		
	});