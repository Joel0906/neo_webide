sap.ui.define([
	"sap/ui/core/Control"
	], 
	function(superControl){
		"use strict";
		return superControl.extend("joel.customcontrol.myControl",{
		
		metadata :{
			properties :{
				input :"",
				fontColor :"",
				border : "",
				height: "",
				width: "" 
			}
		},
		init :  function(){
			this.setBorder("1px solid black");
			
		},
		renderer :  function(oRm, oControl){
			// oRm.write("<h1 style='color:"+oControl.getFontColor()+"'>"+oControl.getInput()+"</h1>");
			oRm.write("<div");
			oRm.addStyle("height",oControl.getHeight());
			oRm.addStyle("width",oControl.getWidth());
		    oRm.addStyle("border",oControl.getBorder());
			oRm.writeStyles();
			oRm.write(">");
			oRm.write("<h1");
			oRm.addStyle("color", oControl.getFontColor());
			oRm.writeStyles();
			oRm.write(">"+ oControl.getInput()+"</h1>");
			oRm.write("</div>");
			
		}
		
		});
	
});